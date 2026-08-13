"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";

export function BrowserMockup() {
  return (
    <section className="relative -mt-4 pb-24 lg:-mt-8 lg:pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-4xl"
        >
          <div
            aria-hidden
            className="absolute -top-8 -left-6 size-16 rounded-2xl bg-brand-bg sm:-left-10"
          />
          <div
            aria-hidden
            className="absolute -bottom-8 -right-4 size-20 rounded-full bg-surface-tint sm:-right-8"
          />

          <div
            aria-hidden
            className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted"
          >
            <div className="flex items-center gap-2 border-b border-border bg-surface-subtle px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-brand-primary/60" />
              <span className="size-2.5 rounded-full bg-brand-primary/60" />
              <span className="size-2.5 rounded-full bg-brand-primary/60" />
              <span className="ml-4 h-5 flex-1 max-w-xs rounded-full bg-surface" />
            </div>

            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[1.1fr_0.9fr] sm:p-8">
              <div className="flex flex-col gap-3">
                <span className="h-3 w-2/3 rounded-full bg-brand-secondary/80" />
                <span className="h-3 w-full rounded-full bg-border-strong" />
                <span className="h-3 w-5/6 rounded-full bg-border-strong" />
                <span className="h-3 w-1/2 rounded-full bg-border-strong" />
                <div className="mt-3 flex gap-3">
                  <span className="h-8 w-28 rounded-full bg-brand-secondary" />
                  <span className="h-8 w-24 rounded-full border border-border-strong" />
                </div>
              </div>
              <div className="rounded-xl bg-surface-tint sm:min-h-32" />
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-border p-6 sm:p-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-2.5 rounded-xl border border-border p-4">
                  <span className="size-6 rounded-full bg-brand-bg" />
                  <span className="h-2 w-full rounded-full bg-border-strong" />
                  <span className="h-2 w-2/3 rounded-full bg-border" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
