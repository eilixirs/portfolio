"use client";

import Image from "next/image";
import { FadeIn, Text, Section, Grid, ScaleIn, DecoratedHeading } from "@/components/primitives";

export function About() {
  return (
    <Section>
      <FadeIn duration={0.6}>
        <Grid className="pt-12" columns="2-1" gap="lg">
          <div>
            <DecoratedHeading.Root level={1}>
              <DecoratedHeading.Background>嗨～我是思睿</DecoratedHeading.Background>
              <DecoratedHeading.Content>Hey! I&apos;m Iris</DecoratedHeading.Content>
            </DecoratedHeading.Root>
            <Text className="mb-5">
              I&apos;m a strategic marketer and creative problem-solver who&apos;s been obsessed
              with design since day one. I&apos;sve got passion for building brands that resonate
              and systems that feel frictionless. Currently pursuing a Bachelor of Commerce at
              Queen&apos;s University, Canada.
            </Text>
            <Text className="mb-5">
              I&apos;m fond of photography, UX/UI design, and context engineering.
              I&apos;ve traveled to 26 countries, and can hold a conversation
              with anyone in Mandarin Chinese.
            </Text>
            <Text>
              I thrive on turning vague ideas into compelling visuals, whether
              through slide-driven presentations, brand guidelines, or content
              that drives engagement. Above all, I&apos;sm a sucker for telling 
              story of innovative, impactful projects, and I&apos;sm hooked on
              any way to improve my efficiency.
            </Text>
          </div>

          <ScaleIn delay={0.2}>
            <Image
              src="/images/lil-border.webp"
              alt="Iris Xie"
              width={800}
              height={1198}
              className="aspect-square object-cover rounded-xl w-1/2 sm:w-[unset] justify-self-center"
              draggable={false}
              priority
            />
          </ScaleIn>
        </Grid>
      </FadeIn>
    </Section>
  );
}
