"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const liftVariants = {
  sm: { y: -4, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)" },
  md: { y: -6, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)" },
  lg: { y: -8, boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12)" },
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
      className={cn(className)}
      whileHover={liftVariants[lift]}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
