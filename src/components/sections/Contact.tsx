"use client";

import { Container } from "@/components/ui/Container";
import { GlassButton } from "@/components/ui/GlassButton";
import { SectionHeading, FadeIn, Text, Section } from "@/components/primitives";

export function Contact() {
  return (
    <Section padding="extended" className="text-left">
      <Container>
        <SectionHeading>Let&apos;s Collaborate</SectionHeading>

        <FadeIn delay={0.1}>
          <Text variant="lead" className="mb-10 max-w-full">
            I love to collaborate on new brands and projects. If you have a
            winning idea, reach out!
          </Text>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="flex flex-wrap gap-5 justify-start max-sm:flex-col max-sm:items-center"
        >
          <GlassButton href="mailto:irisxie@outlook.com">Email</GlassButton>
          <GlassButton href="https://www.linkedin.com/in/iris-xie-sr/">
            LinkedIn
          </GlassButton>
          <GlassButton href="tel:+16479909036">Phone</GlassButton>
        </FadeIn>
      </Container>
    </Section>
  );
}
