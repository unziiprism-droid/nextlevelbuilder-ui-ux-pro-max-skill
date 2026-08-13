"use client";

import { motion } from "motion/react";
import { Gauge, Search, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const valueProps = [
  { icon: Gauge, label: "Fast, modern builds" },
  { icon: Search, label: "SEO focused foundations" },
  { icon: TrendingUp, label: "Built to convert" },
];

const headingWords = "Websites & SEO Built to Grow Your Business".split(" ");

const wordVariants = {
  hidden: { y: "115%" },
  visible: { y: "0%" },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-24 right-[8%] h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--color-brand-supporting)" }}
          animate={{ x: [0, 24, -12, 0], y: [0, -18, 14, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 left-[4%] h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--color-brand-primary)" }}
          animate={{ x: [0, -20, 16, 0], y: [0, 16, -10, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 bg-surface-muted/30" />
      </div>

      <Container className="flex flex-col items-center pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Website Development &amp; SEO Agency</Eyebrow>
        </motion.div>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-secondary sm:text-5xl lg:text-6xl">
          {headingWords.map((word, index) => (
            <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-1 align-top">
              <motion.span
                className="inline-block"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
                {index < headingWords.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary"
        >
          Unzii partners with businesses of every size to create fast websites, improve
          online visibility, and deliver measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
