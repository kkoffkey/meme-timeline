import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/meme-timeline",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
