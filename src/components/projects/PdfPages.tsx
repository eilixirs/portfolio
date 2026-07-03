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

  // aspectRatio (exact float) drives height when the canvas is in normal flow
  // (the loading stack), so it matches the real page height and doesn't reflow.
  // It's ignored when the canvas is absolutely filled (inset-0) behind a page.
  return (
    <canvas
      ref={ref}
      width={w}
      height={h}
      className={className}
      style={{ aspectRatio: String(aspect) }}
    />
  );
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
    <div ref={containerRef} className="w-full leading-none">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        // During the (slow) download the document has no pages yet, so react-pdf
        // renders this instead: a blurred, correctly-proportioned stack of every
        // page. Once loaded it's replaced by the real pages below.
        loading={
          preview ? (
            preview.map((p, i) => (
              <Blurhash
                key={i}
                hash={p.hash}
                aspect={p.aspect}
                className="block w-full"
              />
            ))
          ) : (
            <p className="text-sm text-text-medium">Loading document…</p>
          )
        }
        error={<p className="text-sm text-text-medium">Could not load PDF.</p>}
      >
        {width > 0 &&
          Array.from({ length: pageCount }, (_, i) => {
            const p = preview?.[i];
            // Each page owns its own blur: the real Page defines the wrapper
            // height (opacity doesn't affect layout), and the blur sits absolutely
            // behind it filling exactly that box — so it can never drift out from
            // under the page the way a single shared overlay did.
            return (
              <div key={i} className="relative block">
                {p && (
                  <Blurhash
                    hash={p.hash}
                    aspect={p.aspect}
                    className={clsx(
                      "absolute inset-0 h-full w-full transition-opacity duration-500",
                      rendered.has(i) ? "opacity-0" : "opacity-100",
                    )}
                  />
                )}
                {/* react-pdf paints a white Page background the instant it mounts
                    (Page.js sets backgroundColor: 'white'), which would hide the
                    blur before the canvas rasterizes. So the page stays invisible
                    until its onRenderSuccess fires — the switch happens exactly
                    when the page finishes rendering — then fades in over the blur. */}
                <Page
                  pageNumber={i + 1}
                  width={width}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  onRenderSuccess={() => markRendered(i)}
                  loading=""
                  className={clsx(
                    "relative block [&_canvas]:!h-auto [&_canvas]:!w-full",
                    preview && "transition-opacity duration-500",
                    preview && !rendered.has(i) && "opacity-0",
                  )}
                />
              </div>
            );
          })}
      </Document>
    </div>
  );
}
