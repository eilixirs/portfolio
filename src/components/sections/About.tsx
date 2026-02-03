"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section className="py-20 bg-white grid-pattern">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-left">
              Hi! I&apos;m Iris
            </h2>
            <p className="mb-5 text-base leading-relaxed text-text-dark">
              I&apos;m a strategic marketer and creative problem-solver with a
              passion for building brands that resonate. Currently pursuing a
              Bachelor of Commerce at Queen&apos;s University, I blend
              analytical thinking with visual storytelling.
            </p>
            <p className="mb-5 text-base leading-relaxed text-text-dark">
              Beyond marketing, I&apos;m deeply curious about the intersection
              of technology and creativity. My interests include photography,
              AI, UI/UX design, and public speaking. I&apos;ve traveled to 26
              countries, and can hold a conversation with anyone in Mandarin
              Chinese.
            </p>
            <p className="text-base leading-relaxed text-text-dark">
              I thrive on turning complex ideas into compelling visual
              narratives, whether through slide-driven presentations, brand
              guidelines, or content that drives engagement. I believe great
              marketing sits at the intersection of strategy, design, and human
              connection.
            </p>
          </div>

          <motion.div
            className="mt-12 lg:mt-14"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/headshot.webp"
              alt="Iris Xie"
              width={800}
              height={1198}
              className="w-full max-w-xs lg:max-w-none rounded-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
