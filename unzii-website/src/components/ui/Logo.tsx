import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders the official Unzii logo files:
 *   public/logo/unzii-mark.jpg   the monogram, for compact spaces
 *   public/logo/unzii-logo.png   the full mark + wordmark
 *
 * Both are dark colored (for light backgrounds). There's no separate
 * light/inverse version, so on dark surfaces wrap this in a light
 * plate (see Footer.tsx) rather than altering the image itself.
 */
export function Logo({
  variant = "mark",
  className,
}: {
  variant?: "mark" | "full";
  className?: string;
}) {
  if (variant === "full") {
    return (
      <Image
        src="/logo/unzii-logo.png"
        alt="Unzii"
        width={900}
        height={497}
        className={cn("h-14 w-auto", className)}
        priority
      />
    );
  }

  return (
    <Image
      src="/logo/unzii-mark.jpg"
      alt="Unzii"
      width={200}
      height={200}
      className={cn("h-14 w-14 rounded-xl", className)}
      priority
    />
  );
}
