"use client";

import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <Heading level={2} className={cn(className)}>
        {children}
      </Heading>
    </motion.div>
  );
}
