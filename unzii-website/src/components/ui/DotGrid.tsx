import { cn } from "@/lib/utils";

/**
 * A faint, fading dot-grid texture — a crisp geometric accent used instead
 * of blurred color glows. `color` should be a Tailwind text-color utility
 * (with opacity), since the dots are drawn from `currentColor`.
 */
export function DotGrid({
  className,
  color = "text-brand-secondary/[0.09]",
  size = 18,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", color, className)}
      style={{
        backgroundImage: "radial-gradient(currentColor 1.4px, transparent 1.4px)",
        backgroundSize: `${size}px ${size}px`,
        maskImage: "radial-gradient(ellipse 70% 70% at center, black 45%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 70% at center, black 45%, transparent 100%)",
      }}
    />
  );
}
