"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn, Section, DecoratedHeading } from "@/components/primitives";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section>
      <DecoratedHeading.Root level={2}>
        <DecoratedHeading.Background>行业</DecoratedHeading.Background>
        <DecoratedHeading.Content>What I do</DecoratedHeading.Content>
      </DecoratedHeading.Root>

      <FadeIn delay={0.2} direction="none">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px p-px bg-black/8 -mx-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
