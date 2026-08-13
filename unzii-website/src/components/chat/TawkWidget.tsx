import Script from "next/script";
import { chatConfig } from "@/lib/site-config";

/**
 * Loads the Tawk.to live chat widget site wide. Inactive (renders
 * nothing) until chatConfig.tawkPropertyId and tawkWidgetId are set in
 * src/lib/site-config.ts.
 */
export function TawkWidget() {
  const { tawkPropertyId, tawkWidgetId } = chatConfig;
  if (!tawkPropertyId || !tawkWidgetId) return null;

  return (
    <Script
      id="tawk-to-widget"
      strategy="afterInteractive"
      src={`https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`}
      crossOrigin="anonymous"
    />
  );
}
