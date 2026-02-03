"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="py-20 pb-24 relative overflow-hidden bg-gradient-to-b from-bg-light via-bg-light to-white">
      {/* Gradient accent */}
      <div
        className="absolute w-full h-full opacity-35 blur-[70px] -top-1/5 left-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at top center, var(--color-accent-pink) 0%, var(--color-accent-peach) 25%, var(--color-accent-green) 55%, transparent 85%)",
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-base md:text-lg text-text-medium font-normal tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Integrated Marketing × Brand Strategy × Visual Design
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
