import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/ghost-image",
      },
      {
        pathname: "/images/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghost-production-3a0d.up.railway.app",
        pathname: "/content/images/**",
      },
    ],
  },
};

export default nextConfig;
