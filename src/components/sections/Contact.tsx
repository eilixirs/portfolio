"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassButton } from "@/components/ui/GlassButton";

export function Contact() {
  return (
    <section className="py-20 pb-60 bg-white grid-pattern text-left">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Collaborate
        </motion.h2>

        <motion.p
          className="text-lg text-text-medium mb-10 max-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I love to collaborate on new brands and projects. If you have a
          winning idea, reach out!
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-5 justify-start max-sm:flex-col max-sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlassButton href="mailto:irisxie@outlook.com">Email</GlassButton>
          <GlassButton href="https://www.linkedin.com/in/iris-xie-sr/">
            LinkedIn
          </GlassButton>
          <GlassButton href="tel:+16479909036">Phone</GlassButton>
        </motion.div>
      </Container>
    </section>
  );
}
