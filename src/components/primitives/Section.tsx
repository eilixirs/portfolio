import { cn } from "@/lib/utils";

type SectionPadding = "default" | "extended";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: SectionPadding;
  id?: string;
}

const paddingStyles: Record<SectionPadding, string> = {
  default: "",
  extended: "pb-60",
};

export function Section({
  children,
  className,
  padding = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        paddingStyles[padding],
        "relative z-10",
        className
      )}
    >
      {children}
    </section>
  );
}
