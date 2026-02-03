import { cn } from "@/lib/utils";

type SectionBackground = "white" | "light" | "transparent";
type SectionPadding = "default" | "extended";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  padding?: SectionPadding;
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-white",
  light: "bg-bg-light",
  transparent: "",
};

const paddingStyles: Record<SectionPadding, string> = {
  default: "py-20",
  extended: "py-20 pb-60",
};

export function Section({
  children,
  className,
  background = "white",
  padding = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        paddingStyles[padding],
        backgroundStyles[background],
        "grid-pattern",
        className
      )}
    >
      {children}
    </section>
  );
}
