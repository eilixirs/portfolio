"use client";

import Link from "next/link";
import { FadeIn, Text, DecoratedHeading } from "@/components/primitives";
import { FloraIllustrationBottom } from "@/components/sections/FloraIllustration";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <FadeIn duration={0.6}>
        <div className="text-center max-w-md">
          <DecoratedHeading.Root level={1} className="justify-center mx-auto">
            <DecoratedHeading.Background className="left-1/2 -translate-x-1/2">
              找不到页面
            </DecoratedHeading.Background>
            <DecoratedHeading.Content className="text-center">
              Page Not Found
            </DecoratedHeading.Content>
          </DecoratedHeading.Root>

          <Text className="mb-8 text-center">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </Text>

          <Link
            href="/"
            className="underline hover:no-underline"
          >
            Back to Home
          </Link>
        </div>
      </FadeIn>

      <FloraIllustrationBottom className="absolute bottom-0 left-0 right-0 w-full max-h-[40vh] object-cover object-top pointer-events-none max-w-7xl mx-auto" />
    </main>
  );
}
