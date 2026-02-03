"use client";

import { FadeIn, Text, Section, DecoratedHeading } from "@/components/primitives";

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
}

function ContactLink({ href, children }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="relative underline hover:no-underline after:absolute after:left-full after:ml-2.5 after:inset-y-0 after:scale-y-50 after:w-px after:bg-current last:after:hidden max-sm:after:hidden"
    >
      {children}
    </a>
  );
}

export function Contact() {
  return (
    <Section className="text-left">
      <DecoratedHeading.Root level={2}>
        <DecoratedHeading.Background>合作</DecoratedHeading.Background>
        <DecoratedHeading.Content>Let&apos;s Collaborate</DecoratedHeading.Content>
      </DecoratedHeading.Root>

      <FadeIn delay={0.1}>
        <Text variant="lead" className="mb-6 max-w-full">
          I love to collaborate on new brands and projects. If you have a
          winning idea, reach out!
        </Text>
      </FadeIn>

      <FadeIn
        delay={0.2}
        className="flex flex-wrap gap-5 justify-start max-sm:flex-col max-sm:items-start"
      >
        <ContactLink href="mailto:irisxie@outlook.com">Email</ContactLink>
        <ContactLink href="https://www.linkedin.com/in/iris-xie-sr/">LinkedIn</ContactLink>
      </FadeIn>
    </Section>
  );
}
