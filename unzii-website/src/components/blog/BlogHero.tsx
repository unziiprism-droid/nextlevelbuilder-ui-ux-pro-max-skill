"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function BlogHero({ categories }: { categories: readonly string[] }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-muted/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--color-brand-primary) 35%, transparent) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 80% 60% at 70% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 70% 0%, black, transparent)",
        }}
      />

      <Container className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Blog</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl"
          >
            Insights on Web, SEO, and Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary"
          >
            Practical, no fluff writing on building fast websites and improving search
            visibility. Our first articles are on the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/start-your-project" size="lg" showArrow>
              Start Your Project
            </Button>
            <Button href="/website-development" variant="secondary" size="lg">
              See Our Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-border bg-surface p-8 shadow-soft"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            What we&apos;ll cover
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-surface-muted px-4 py-2 text-sm font-medium text-text-secondary"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
