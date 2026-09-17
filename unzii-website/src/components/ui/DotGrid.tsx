import { cn } from "@/lib/utils";

/**
 * A fading two-tone dot-grid texture — a crisp geometric accent used
 * instead of blurred color glows. Two interleaved dot colors (default
 * navy + yellow) alternate across the grid.
 */
export function DotGrid({
  className,
  colors = ["var(--color-brand-secondary)", "var(--color-brand-yellow)"],
  size = 22,
  dotSize = 2.6,
}: {
  className?: string;
  colors?: [string, string];
  size?: number;
  dotSize?: number;
}) {
  const [first, second] = colors;
  const half = size / 2;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      style={{
        backgroundImage: `radial-gradient(${first} ${dotSize}px, transparent ${dotSize}px), radial-gradient(${second} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${size}px ${size}px, ${size}px ${size}px`,
        backgroundPosition: `0 0, ${half}px ${half}px`,
        maskImage: "radial-gradient(ellipse 75% 75% at center, black 55%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 75% at center, black 55%, transparent 100%)",
      }}
    />
  );
}
