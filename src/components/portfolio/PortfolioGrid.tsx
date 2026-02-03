"use client";

import { usePortfolio } from "./context";
import { PortfolioCard } from "./PortfolioCard";
import { FadeIn, StaggerItem, Grid } from "@/components/primitives";

export function PortfolioGrid() {
  const { meta } = usePortfolio();

  return (
    <FadeIn delay={0.2} direction="none">
      <Grid columns="3">
        {meta.items.map((item, index) => (
          <StaggerItem key={item.id} index={index}>
            <PortfolioCard item={item} />
          </StaggerItem>
        ))}
      </Grid>
    </FadeIn>
  );
}
