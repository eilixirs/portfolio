"use client";

import { motion } from "framer-motion";
import { usePortfolio } from "./context";
import { PortfolioCard } from "./PortfolioCard";

export function PortfolioGrid() {
  const { meta } = usePortfolio();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {meta.items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <PortfolioCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
