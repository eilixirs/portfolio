"use client";

import { Section, DecoratedHeading } from "@/components/primitives";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function BlogSection() {
  return (
    <Section id="blog">
      <DecoratedHeading.Root level={2}>
        <DecoratedHeading.Background>项目</DecoratedHeading.Background>
        <DecoratedHeading.Content>My projects</DecoratedHeading.Content>
      </DecoratedHeading.Root>
      <ProjectGrid />
    </Section>
  );
}
