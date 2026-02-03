"use client";

import { createContext, use } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DecoratedHeadingContextValue {
  level: 1 | 2;
}

const DecoratedHeadingContext = createContext<DecoratedHeadingContextValue | null>(null);

interface RootProps {
  children: React.ReactNode;
  level?: 1 | 2;
  className?: string;
}

function Root({ children, level = 2, className }: RootProps) {
  return (
    <DecoratedHeadingContext value={{ level }}>
      <div className={cn("relative w-fit", className)}>
        {children}
      </div>
    </DecoratedHeadingContext>
  );
}

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

function Background({ children, className }: BackgroundProps) {
  const ctx = use(DecoratedHeadingContext);
  const level = ctx?.level ?? 2;
  const Component = `h${level}` as "h1" | "h2";

  return (
    <div className="absolute inset-y-0 left-0 origin-left select-none pointer-events-none">
      <Component
        className={cn(
          "font-serif font-light tracking-[-0.08em] italic font-chinese opacity-15 text-nowrap text-3xl md:text-6xl lg:-translate-x-8 -translate-y-2/3",
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
}

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

function Content({ children, className }: ContentProps) {
  const ctx = use(DecoratedHeadingContext);
  const level = ctx?.level ?? 2;
  const Component = `h${level}` as "h1" | "h2";

  const baseStyles = level === 1
    ? "font-serif text-5xl md:text-6xl font-light mb-6 tracking-[-0.08em] italic text-left"
    : "font-serif text-5xl font-light mb-6 tracking-[-0.08em] italic text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <Component className={cn(baseStyles, className)}>
        {children}
      </Component>
    </motion.div>
  );
}

export const DecoratedHeading = {
  Root,
  Background,
  Content,
};
