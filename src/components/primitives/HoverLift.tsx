"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const liftVariants = {
  sm: { y: -4 },
  md: { y: -6 },
  lg: { y: -8 },
};

const shadowStyles = {
  sm: "hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
  md: "hover:drop-shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
  lg: "hover:drop-shadow-[0_16px_48px_rgba(0,0,0,0.12)]",
};

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
  lift?: "sm" | "md" | "lg";
} & Omit<HTMLMotionProps<"div">, "whileHover">;

export function HoverLift({
  children,
  className,
  lift = "md",
  ...props
}: HoverLiftProps) {
  return (
    <motion.div
      className={cn("transition-[filter]", shadowStyles[lift], className)}
      whileHover={liftVariants[lift]}
      transition={{ duration: 0.24 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
