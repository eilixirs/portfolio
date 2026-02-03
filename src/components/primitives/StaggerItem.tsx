"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
}

export function StaggerItem({
  children,
  index,
  className,
  baseDelay = 0,
  staggerDelay = 0.1,
}: StaggerItemProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: baseDelay + index * staggerDelay }}
    >
      {children}
    </motion.div>
  );
}
