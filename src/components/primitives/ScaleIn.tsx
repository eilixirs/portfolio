"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: ScaleInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
