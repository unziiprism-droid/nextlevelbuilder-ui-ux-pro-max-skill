"use client";

import { motion } from "motion/react";

const nodes = [
  { x: 70, y: 70 },
  { x: 190, y: 30 },
  { x: 300, y: 100 },
  { x: 110, y: 190 },
  { x: 230, y: 230 },
  { x: 40, y: 340 },
  { x: 150, y: 420 },
  { x: 700, y: 60 },
  { x: 830, y: 30 },
  { x: 940, y: 110 },
  { x: 790, y: 170 },
  { x: 900, y: 250 },
  { x: 780, y: 330 },
  { x: 930, y: 400 },
  { x: 820, y: 470 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [2, 4],
  [3, 5],
  [5, 6],
  [4, 6],
  [7, 8],
  [8, 9],
  [7, 10],
  [10, 11],
  [9, 11],
  [10, 12],
  [12, 13],
  [11, 13],
  [13, 14],
];

const pulseEdges = new Set([1, 8, 14]);

export function NetworkPattern() {
  return (
    <motion.div
      className="absolute -top-10 left-0 right-0 h-[560px] opacity-[0.35]"
      animate={{ x: [0, 14, -10, 0], y: [0, -10, 8, 0] }}
      transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 1000 560"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {edges.map(([a, b], index) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--color-brand-supporting)"
            strokeWidth="1"
            initial={{ opacity: 0.18 }}
            animate={
              pulseEdges.has(index)
                ? { opacity: [0.18, 0.55, 0.18] }
                : { opacity: 0.18 }
            }
            transition={
              pulseEdges.has(index)
                ? { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }
                : undefined
            }
          />
        ))}
        {nodes.map((node, index) => (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={index % 3 === 0 ? 4 : 3}
            fill={index % 2 === 0 ? "var(--color-brand-supporting)" : "var(--color-brand-primary)"}
          />
        ))}
      </svg>
    </motion.div>
  );
}
