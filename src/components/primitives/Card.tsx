import { cn } from "@/lib/utils";

type CardPadding = "none" | "md" | "lg";
type CardBackground = "white" | "light";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: CardPadding;
  background?: CardBackground;
  border?: boolean;
  rounded?: boolean;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "",
  md: "p-6",
  lg: "p-10",
};

const backgroundStyles: Record<CardBackground, string> = {
  white: "bg-white",
  light: "bg-bg-light",
};

export function Card({
  children,
  className,
  padding = "md",
  background = "white",
  border = true,
  rounded = false,
}: CardProps) {
  return (
    <div
      className={cn(
        paddingStyles[padding],
        backgroundStyles[background],
        border && "border border-black/8",
        rounded && "rounded",
        className
      )}
    >
      {children}
    </div>
  );
}
