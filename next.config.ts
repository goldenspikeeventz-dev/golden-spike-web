import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve /public JPEGs reliably in local/dev without optimizer edge cases
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
