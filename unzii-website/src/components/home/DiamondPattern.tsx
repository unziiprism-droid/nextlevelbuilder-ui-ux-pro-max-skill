"use client";

import { motion } from "motion/react";

const diamonds = [
  { top: "6%", left: "6%", size: 46, fill: false, color: "supporting", duration: 24 },
  { top: "16%", left: "16%", size: 22, fill: true, color: "primary", duration: 20 },
  { top: "34%", left: "3%", size: 30, fill: false, color: "primary", duration: 28 },
  { top: "58%", left: "10%", size: 60, fill: false, color: "supporting", duration: 32 },
  { top: "72%", left: "2%", size: 18, fill: true, color: "supporting", duration: 18 },

  { top: "8%", left: "90%", size: 34, fill: true, color: "supporting", duration: 22 },
  { top: "22%", left: "80%", size: 58, fill: false, color: "primary", duration: 30 },
  { top: "46%", left: "92%", size: 24, fill: false, color: "supporting", duration: 19 },
  { top: "64%", left: "83%", size: 42, fill: false, color: "primary", duration: 26 },
  { top: "80%", left: "93%", size: 20, fill: true, color: "primary", duration: 21 },
] as const;

export function DiamondPattern() {
  return (
    <>
      {diamonds.map((d, index) => (
        <motion.div
          key={index}
          className="absolute rounded-[6px]"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            transform: "rotate(45deg)",
            background: d.fill
              ? `var(--color-brand-${d.color})`
              : "transparent",
            border: d.fill ? "none" : `2px solid var(--color-brand-${d.color})`,
            opacity: d.fill ? 0.16 : 0.28,
          }}
          animate={{
            y: [0, -14, 10, 0],
            rotate: [45, 52, 38, 45],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />
      ))}
    </>
  );
}
