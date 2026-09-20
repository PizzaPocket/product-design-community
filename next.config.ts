import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // The Brooklyn chapter rebranded to New York Product Design in 2026.
      { source: "/brooklyn", destination: "/newyork", permanent: true },
      { source: "/brooklyn/:path*", destination: "/newyork/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
