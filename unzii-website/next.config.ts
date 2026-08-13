import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: produces plain HTML/CSS/JS in out/ that can be
  // uploaded to any host (e.g. Hostinger shared hosting) with no
  // Node.js server required. Build with `npm run build:static`.
  output: "export",
  images: {
    // No Node server available to resize images on demand under a
    // static export; all images here are local SVGs served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
