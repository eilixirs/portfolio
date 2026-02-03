"use client";

import { Portfolio } from "@/components/portfolio";
import { Section, DecoratedHeading } from "@/components/primitives";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <Section>
      <Portfolio.Provider items={portfolioItems}>
        <DecoratedHeading.Root level={2}>
          <DecoratedHeading.Background>项目</DecoratedHeading.Background>
          <DecoratedHeading.Content>My projects</DecoratedHeading.Content>
        </DecoratedHeading.Root>
        <Portfolio.Grid />

        <Portfolio.Modal />
      </Portfolio.Provider>
    </Section>
  );
}
