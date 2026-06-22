"use client";

import dynamic from "next/dynamic";

// Load react-pdf only in the browser so pdf.js never evaluates during the
// static-export build (it depends on browser globals).
const PdfPages = dynamic(() => import("./PdfPages"), {
  ssr: false,
  loading: () => <p className="text-sm text-text-medium">Loading document…</p>,
});

export function ProjectPdf({ file }: { file: string }) {
  return <PdfPages file={file} />;
}
