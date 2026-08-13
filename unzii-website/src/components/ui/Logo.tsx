import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders the original Unzii mark as-is, with no live text next to it —
 * never recreated or re-colored. Drop the exact SVGs at
 * public/logo/unzii-mark.svg (light backgrounds) and
 * public/logo/unzii-mark-inverse.svg (dark backgrounds, e.g. the footer)
 * to replace the temporary placeholders referenced here.
 */
export function Logo({
  inverse = false,
  className,
}: {
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={inverse ? "/logo/unzii-mark-inverse.svg" : "/logo/unzii-mark.svg"}
      alt="Unzii"
      width={40}
      height={40}
      className={cn("h-10 w-10", className)}
      priority
    />
  );
}
