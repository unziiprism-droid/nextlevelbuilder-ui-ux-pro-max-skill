import { cn } from "@/lib/utils";

/**
 * A single soft, diffuse blurred accent — layer 2-3 of these at varying
 * sizes/positions/opacities per section for a premium, non-flat feel
 * without reading as a solid "blob".
 */
export function Glow({
  className,
  color = "var(--color-brand-yellow)",
  opacity = 30,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{ background: color, opacity: opacity / 100 }}
    />
  );
}
