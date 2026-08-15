import Script from "next/script";
import { analyticsConfig } from "@/lib/site-config";

/**
 * Loads Google Analytics 4 (gtag.js) site wide. Inactive (renders
 * nothing) until analyticsConfig.ga4MeasurementId is set in
 * src/lib/site-config.ts.
 */
export function GoogleAnalytics() {
  const { ga4MeasurementId } = analyticsConfig;
  if (!ga4MeasurementId) return null;

  return (
    <>
      <Script
        id="ga4-tag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4MeasurementId}');
        `}
      </Script>
    </>
  );
}
