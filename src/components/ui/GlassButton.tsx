"use client";

import { motion } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const glassButton = tv({
  base: [
    "inline-block py-4 px-10",
    "bg-white/40 backdrop-blur-md",
    "border border-white/60 rounded-full",
    "text-text-dark no-underline font-medium text-sm",
    "tracking-wide shadow-lg shadow-black/8",
    "transition-colors cursor-pointer",
  ],
  variants: {
    size: {
      sm: "py-2 px-6 text-xs",
      md: "py-4 px-10 text-sm",
      lg: "py-5 px-12 text-base",
    },
    fullWidth: {
      true: "w-full max-w-xs text-center",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type GlassButtonVariants = VariantProps<typeof glassButton>;

interface GlassButtonProps extends GlassButtonVariants {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function GlassButton({
  href,
  children,
  className,
  size,
  fullWidth,
}: GlassButtonProps) {
  return (
    <motion.a
      href={href}
      className={cn(glassButton({ size, fullWidth }), className)}
      whileHover={{
        y: -2,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.a>
  );
}
