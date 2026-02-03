import { cn } from "@/lib/utils";

type GridColumns = "1" | "2" | "3" | "2-1";
type GridGap = "md" | "lg";

interface GridProps {
  children: React.ReactNode;
  columns?: GridColumns;
  gap?: GridGap;
  className?: string;
}

const columnStyles: Record<GridColumns, string> = {
  "1": "grid-cols-1",
  "2": "grid-cols-1 lg:grid-cols-2",
  "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  "2-1": "grid-cols-1 lg:grid-cols-[2fr_1fr]",
};

const gapStyles: Record<GridGap, string> = {
  md: "gap-8",
  lg: "gap-16",
};

export function Grid({
  children,
  columns = "1",
  gap = "md",
  className,
}: GridProps) {
  return (
    <div className={cn("grid", columnStyles[columns], gapStyles[gap], className)}>
      {children}
    </div>
  );
}
