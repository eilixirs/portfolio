import type { PortfolioItem } from "@/data/portfolio";
import { Text, Heading } from "@/components/primitives";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  return (
    <div className={cn(className)}>
      <Heading level={4}>{item.title}</Heading>
      <Text variant="small">{item.description}</Text>
    </div>
  );
}
