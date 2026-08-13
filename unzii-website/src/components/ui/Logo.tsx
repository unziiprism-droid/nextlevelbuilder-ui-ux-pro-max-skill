import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders the original Unzii logo as-is, never recreated or re-colored.
 * Drop the exact files at:
 *   public/logo/unzii-mark.svg           (monogram, light backgrounds)
 *   public/logo/unzii-mark-inverse.svg   (monogram, dark backgrounds)
 *   public/logo/unzii-logo.svg           (full logo, light backgrounds)
 *   public/logo/unzii-logo-inverse.svg   (full logo, dark backgrounds)
 * to replace the temporary placeholders referenced here.
 *
 * Use variant="mark" in compact spaces (nav bar) and variant="full" where
 * there's room for the complete logo (footer, larger brand moments).
 */
export function Logo({
  variant = "mark",
  inverse = false,
  className,
}: {
  variant?: "mark" | "full";
  inverse?: boolean;
  className?: string;
}) {
  const isMark = variant === "mark";
  const src = isMark
    ? inverse
      ? "/logo/unzii-mark-inverse.svg"
      : "/logo/unzii-mark.svg"
    : inverse
      ? "/logo/unzii-logo-inverse.svg"
      : "/logo/unzii-logo.svg";

  return (
    <Image
      src={src}
      alt="Unzii"
      width={isMark ? 44 : 148}
      height={44}
      className={cn(isMark ? "h-11 w-11" : "h-11 w-auto", className)}
      priority
    />
  );
}
