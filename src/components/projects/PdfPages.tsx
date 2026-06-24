"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { decode } from "blurhash";
import clsx from "clsx";

import previews from "@/data/pdf-previews.json";

// Self-hosted worker served from /public (bundler-agnostic, works in static
// export). If you bump react-pdf/pdfjs-dist, re-copy the worker:
//   cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs public/pdf.worker.min.mjs
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

// Per-page BlurHash + aspect ratio, generated at build time by
// scripts/generate-pdf-previews.mjs (run via `prebuild`).
type PreviewPage = { hash: string; aspect: number };
const manifest = previews as Record<string, PreviewPage[]>;

// Decode width for the BlurHash — kept tiny; it's stretched to fill via CSS and
// the result is blurry by design, so detail here is wasted.
const BLUR_DECODE_WIDTH = 32;

/** Paints a decoded BlurHash onto a canvas, sized to the page aspect ratio. */
function Blurhash({
  hash,
  aspect,
  className,
}: {
  hash: string;
  aspect: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const w = BLUR_DECODE_WIDTH;
  const h = Math.max(1, Math.round(w / aspect));

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const pixels = decode(hash, w, h);
    const imageData = ctx.createImageData(w, h);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  }, [hash, w, h]);

  return <canvas ref={ref} width={w} height={h} className={className} />;
}

interface PdfPagesProps {
  file: string;
}

export default function PdfPages({ file }: PdfPagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [rendered, setRendered] = useState<ReadonlySet<number>>(new Set());

  const preview = manifest[file];
  // With a manifest we know the page count (and shape) up front, so placeholders
  // render immediately; otherwise we wait for pdf.js to report it.
  const pageCount = preview?.length ?? numPages;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const markRendered = (i: number) =>
    setRendered((prev) => {
      const next = new Set(prev);
      next.add(i);
      return next;
    });

  // leading-none + block pages = no whitespace gaps; edges touch.
  return (
    <div ref={containerRef} className="relative w-full leading-none">
      {/* Placeholder layer (normal flow): gives the container its height with no
          layout shift and shows a blurred preview during the slow download. It
          stays put; each real page fades in on top of it once painted. */}
      {preview?.map((p, i) => (
        <Blurhash
          key={i}
          hash={p.hash}
          aspect={p.aspect}
          className="block w-full"
        />
      ))}

      {/* Real PDF — layered over the placeholders when we have them. react-pdf
          paints a white Page background the instant it mounts (Page.js sets
          backgroundColor: 'white'), which would hide the blur before the canvas
          rasterizes. So each page stays invisible until its onRenderSuccess
          fires — i.e. the switch happens exactly when the page finishes
          rendering — then fades in over the blur. */}
      <div className={preview ? "absolute inset-0" : undefined}>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            preview ? null : (
              <p className="text-sm text-text-medium">Loading document…</p>
            )
          }
          error={<p className="text-sm text-text-medium">Could not load PDF.</p>}
        >
          {width > 0 &&
            Array.from({ length: pageCount }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                width={width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                onRenderSuccess={() => markRendered(i)}
                loading=""
                className={clsx(
                  "block [&_canvas]:!w-full [&_canvas]:!h-auto",
                  // Only gate visibility when a blur placeholder sits behind it.
                  preview && "transition-opacity duration-500",
                  preview && !rendered.has(i) && "opacity-0",
                )}
              />
            ))}
        </Document>
      </div>
    </div>
  );
}
