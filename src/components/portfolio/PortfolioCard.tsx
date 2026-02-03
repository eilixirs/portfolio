"use client";

import { motion } from "framer-motion";
import type { PortfolioItem } from "@/data/portfolio";
import { usePortfolio } from "./context";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  const { actions } = usePortfolio();

  return (
    <motion.div
      className={cn("cursor-pointer", className)}
      onClick={() => actions.openModal(item)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={cn(
          "w-full aspect-[4/3] bg-bg-light",
          "border border-black/8 mb-5 overflow-hidden"
        )}
        whileHover={{
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={cn(
            "w-full h-full flex items-center justify-center",
            "bg-gradient-to-br from-accent-peach/20 to-accent-green/20",
            "text-text-medium text-sm"
          )}
        >
          {item.title}
        </div>
      </motion.div>
      <h4 className="text-lg font-medium mb-2">{item.title}</h4>
      <p className="text-sm text-text-medium leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}
