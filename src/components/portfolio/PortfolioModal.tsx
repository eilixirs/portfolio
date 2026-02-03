"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "./context";
import { cn } from "@/lib/utils";

export function PortfolioModal() {
  const { state, actions } = usePortfolio();
  const { selectedItem, isModalOpen } = state;

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        actions.closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, actions]);

  return (
    <AnimatePresence>
      {isModalOpen && selectedItem && (
        <motion.div
          className={cn(
            "fixed inset-0 z-50",
            "flex items-center justify-center",
            "bg-text-dark/95 backdrop-blur-md"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={actions.closeModal}
        >
          <motion.div
            className={cn(
              "bg-white p-10 rounded",
              "max-w-[90vw] max-h-[90vh]",
              "overflow-auto relative"
            )}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={actions.closeModal}
              className={cn(
                "absolute top-5 right-8",
                "text-4xl font-light text-text-dark",
                "hover:text-text-medium transition-colors",
                "cursor-pointer z-10"
              )}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-medium">{selectedItem.title}</h3>
              <p className="text-sm text-text-medium">
                {selectedItem.description}
              </p>
            </div>

            <div className="w-[70vw] h-[70vh] max-w-5xl">
              <embed
                src={selectedItem.pdfPath}
                type="application/pdf"
                className="w-full h-full"
                title={selectedItem.title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
