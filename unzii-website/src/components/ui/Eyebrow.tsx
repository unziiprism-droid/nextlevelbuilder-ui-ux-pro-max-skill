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
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]",
        inverse ? "text-text-inverse-muted" : "text-brand-supporting",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          inverse ? "bg-text-inverse-muted" : "bg-brand-supporting",
        )}
      />
      {children}
    </span>
  );
}
