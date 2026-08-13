"use client";

import { motion } from "motion/react";
import { Gauge, Search, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const valueProps = [
  { icon: Gauge, label: "Fast, modern builds" },
  { icon: Search, label: "SEO-first foundations" },
  { icon: TrendingUp, label: "Built to convert" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 82% 8%, color-mix(in srgb, var(--color-brand-supporting) 14%, transparent), transparent), radial-gradient(50% 45% at 8% 0%, color-mix(in srgb, var(--color-brand-primary) 16%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-surface-muted/40"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <Container className="flex flex-col items-center pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Website Development &amp; SEO Agency</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl"
        >
          Websites &amp; SEO Built to Grow Your Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary"
        >
          Unzii partners with businesses of every size to create fast websites, improve
          online visibility, and deliver measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/start-your-project" size="lg" showArrow>
            Start Your Project
          </Button>
          <Button href="#services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {valueProps.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-text-secondary">
              <span className="flex size-8 items-center justify-center rounded-full bg-surface-muted text-brand-supporting">
                <Icon className="size-4" aria-hidden />
              </span>
              {label}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
