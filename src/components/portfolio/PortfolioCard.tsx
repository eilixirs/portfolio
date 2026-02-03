"use client";

import type { PortfolioItem } from "@/data/portfolio";
import { usePortfolio } from "./context";
import { HoverLift, Text, Heading, Card } from "@/components/primitives";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  const { actions } = usePortfolio();

  return (
    <HoverLift
      lift="sm"
      className={cn("cursor-pointer", className)}
      onClick={() => actions.openModal(item)}
    >
      <HoverLift lift="lg">
        <Card
          padding="none"
          background="light"
          className="w-full aspect-[4/3] mb-5 overflow-hidden"
        >
          <div
            className={cn(
              "w-full h-full flex items-center justify-center",
              "bg-gradient-to-br from-accent-peach/20 to-accent-green/20",
              "text-text-medium text-sm"
            )}
          >
            {item.title}
          </div>
        </Card>
      </HoverLift>
      <Heading level={4}>{item.title}</Heading>
      <Text variant="small">{item.description}</Text>
    </HoverLift>
  );
}
