import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "*.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
