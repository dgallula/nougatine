import type { NextConfig } from "next";
import path from "path";

/** Set STATIC_EXPORT=1 for o2switch public_html (static HTML). */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    qualities: [75, 78, 80, 85],
    formats: isStaticExport ? undefined : ["image/avif", "image/webp"],
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
