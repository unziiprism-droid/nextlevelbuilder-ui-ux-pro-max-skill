import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  inverse = false,
  className,
}: {
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em]",
        inverse ? "text-text-inverse-muted" : "text-brand-steel",
        className,
      )}
    >
      {children}
    </span>
  );
}
