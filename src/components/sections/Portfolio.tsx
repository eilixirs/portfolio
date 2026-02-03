"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Portfolio } from "@/components/portfolio";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section className="py-20 bg-white grid-pattern">
      <Portfolio.Provider items={portfolioItems}>
        <Container>
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            My projects
          </motion.h2>

          <Portfolio.Grid />
        </Container>

        <Portfolio.Modal />
      </Portfolio.Provider>
    </section>
  );
}
