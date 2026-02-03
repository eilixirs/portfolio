"use client";

import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading, FadeIn, StaggerItem, Section, Grid } from "@/components/primitives";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section background="transparent">
      <Container>
        <SectionHeading>What I do</SectionHeading>

        <FadeIn delay={0.2} direction="none">
          <Grid columns="1">
            {services.map((service, index) => (
              <StaggerItem key={service.title} index={index}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Grid>
        </FadeIn>
      </Container>
    </Section>
  );
}
