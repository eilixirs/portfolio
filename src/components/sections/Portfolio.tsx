"use client";

import { Container } from "@/components/ui/Container";
import { Portfolio } from "@/components/portfolio";
import { SectionHeading, Section } from "@/components/primitives";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <Section>
      <Portfolio.Provider items={portfolioItems}>
        <Container>
          <SectionHeading>My projects</SectionHeading>
          <Portfolio.Grid />
        </Container>

        <Portfolio.Modal />
      </Portfolio.Provider>
    </Section>
  );
}
