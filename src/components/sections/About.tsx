"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn, Text, Heading, Section, Grid, ScaleIn } from "@/components/primitives";

export function About() {
  return (
    <Section>
      <Container>
        <FadeIn duration={0.6}>
          <Grid columns="2-1" gap="lg">
            <div>
              <Heading level={2}>Hi! I&apos;m Iris</Heading>
              <Text className="mb-5">
                I&apos;m a strategic marketer and creative problem-solver with a
                passion for building brands that resonate. Currently pursuing a
                Bachelor of Commerce at Queen&apos;s University, I blend
                analytical thinking with visual storytelling.
              </Text>
              <Text className="mb-5">
                Beyond marketing, I&apos;m deeply curious about the intersection
                of technology and creativity. My interests include photography,
                AI, UI/UX design, and public speaking. I&apos;ve traveled to 26
                countries, and can hold a conversation with anyone in Mandarin
                Chinese.
              </Text>
              <Text>
                I thrive on turning complex ideas into compelling visual
                narratives, whether through slide-driven presentations, brand
                guidelines, or content that drives engagement. I believe great
                marketing sits at the intersection of strategy, design, and human
                connection.
              </Text>
            </div>

            <ScaleIn delay={0.2} className="mt-12 lg:mt-14">
              <Image
                src="/images/headshot.webp"
                alt="Iris Xie"
                width={800}
                height={1198}
                className="w-full max-w-xs lg:max-w-none rounded-xl"
                draggable={false}
                priority
              />
            </ScaleIn>
          </Grid>
        </FadeIn>
      </Container>
    </Section>
  );
}
