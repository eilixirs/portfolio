"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PDFViewerModalProps {
  pdfPath: string;
  title: string;
}

export function PDFViewerModal({ pdfPath, title }: PDFViewerModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2.5 border border-black/20 px-5 py-2.5 text-sm text-text-dark hover:bg-black/5 transition-colors"
      >
        <DocumentIcon />
        Open Original Document
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] p-5 md:p-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Viewer panel */}
            <motion.div
              className="relative z-10 flex flex-col w-full max-w-5xl h-full bg-white overflow-hidden shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/8 bg-bg-light flex-shrink-0">
                <span className="text-sm text-text-dark font-medium truncate pr-4">
                  {title}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-shrink-0 flex items-center gap-1.5 text-sm text-text-medium hover:text-text-dark transition-colors"
                >
                  Close
                  <span className="text-xs opacity-40 font-mono">[Esc]</span>
                </button>
              </div>

              {/* PDF iframe */}
              <div className="flex-1 min-h-0">
                <iframe
                  src={`${pdfPath}#toolbar=1`}
                  className="w-full h-full border-0"
                  title={`${title} — PDF viewer`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DocumentIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3.5 0.5H9L12.5 4V13.5C12.5 14.0523 12.0523 14.5 11.5 14.5H3.5C2.94772 14.5 2.5 14.0523 2.5 13.5V1.5C2.5 0.947715 2.94772 0.5 3.5 0.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M9 0.5V4H12.5" stroke="currentColor" strokeLinejoin="round" />
      <line x1="4.5" y1="7" x2="10.5" y2="7" stroke="currentColor" strokeLinecap="round" />
      <line x1="4.5" y1="9.5" x2="10.5" y2="9.5" stroke="currentColor" strokeLinecap="round" />
      <line x1="4.5" y1="12" x2="8" y2="12" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
