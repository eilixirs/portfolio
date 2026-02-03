"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "p-8 bg-white border border-black/8 transition-shadow",
        className
      )}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-medium mb-4 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-text-medium">
        {service.description}
      </p>
    </motion.div>
  );
}
