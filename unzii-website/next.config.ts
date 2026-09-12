import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: produces plain HTML/CSS/JS in out/ that can be
  // uploaded to any host (e.g. Hostinger shared hosting) with no
  // Node.js server required. Build with `npm run build:static`.
  output: "export",
  // Emits every route as route/index.html instead of route.html, so a
  // trailing-slash URL (theunzii.com/blog/, which is how it gets
  // indexed and bookmarked) resolves to a real file on shared hosting
  // instead of hitting a bare directory with no index page.
  trailingSlash: true,
  images: {
    // No Node server available to resize images on demand under a
    // static export; local images are served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
