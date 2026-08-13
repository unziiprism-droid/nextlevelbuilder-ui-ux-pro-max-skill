import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders the original Unzii mark (SVG asset) next to a live text wordmark
 * set in the brand typeface. The mark is never recreated or re-colored —
 * drop the exact file at public/logo/unzii-mark.svg to replace the
 * temporary placeholder referenced here.
 */
export function Logo({
  showTagline = false,
  inverse = false,
  className,
}: {
  showTagline?: boolean;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo/unzii-mark.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-xl font-semibold tracking-tight",
            inverse ? "text-text-inverse" : "text-brand-secondary",
          )}
        >
          Unzii
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[11px] font-medium tracking-wide",
              inverse ? "text-text-inverse-muted" : "text-text-muted",
            )}
          >
            Technology That Drives Business
          </span>
        )}
      </span>
    </span>
  );
}
