"use client";

import { motion } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const glassButton = tv({
  base: [
    "inline-block py-4 px-10",
    "bg-white",
    "border border-white/60 rounded-full",
    "text-text-dark no-underline font-medium text-sm",
    "tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]",
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
        backgroundColor: "#fafafa",
      }}
      transition={{ duration: 0.24 }}
    >
      {children}
    </motion.a>
  );
}
