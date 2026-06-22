"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Self-hosted worker served from /public (bundler-agnostic, works in static
// export). If you bump react-pdf/pdfjs-dist, re-copy the worker:
//   cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs public/pdf.worker.min.mjs
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface PdfPagesProps {
  file: string;
}

export default function PdfPages({ file }: PdfPagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // leading-none + block pages = no whitespace gaps; edges touch.
    <div ref={containerRef} className="w-full leading-none">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p className="text-sm text-text-medium">Loading document…</p>}
        error={<p className="text-sm text-text-medium">Could not load PDF.</p>}
      >
        {width > 0 &&
          Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="block [&_canvas]:!w-full [&_canvas]:!h-auto"
            />
          ))}
      </Document>
    </div>
  );
}
