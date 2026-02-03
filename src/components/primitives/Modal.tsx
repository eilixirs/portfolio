"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalOverlayProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

function ModalOverlay({
  children,
  isOpen,
  onClose,
  className,
}: ModalOverlayProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            "fixed inset-0 z-100",
            "flex items-center justify-center",
            "bg-text-dark/95 backdrop-blur-md",
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalContent({ children, className }: ModalContentProps) {
  return (
    <motion.div
      className={cn(
        "bg-white p-10 rounded",
        "w-full max-w-5xl",
        "overflow-auto relative",
        className
      )}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  );
}

export const Modal = {
  Overlay: ModalOverlay,
  Content: ModalContent,
};
