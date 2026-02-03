import { cn } from "@/lib/utils";

type TextVariant = "body" | "lead" | "small" | "muted";

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: "p" | "span" | "div";
}

const variantStyles: Record<TextVariant, string> = {
  body: "text-base leading-relaxed text-text-dark",
  lead: "text-lg text-text-medium",
  small: "text-sm text-text-medium leading-relaxed",
  muted: "text-sm leading-relaxed text-text-medium",
};

export function Text({
  children,
  variant = "body",
  className,
  as: Component = "p",
}: TextProps) {
  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}
