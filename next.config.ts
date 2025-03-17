import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
  eslint: {
    ignoreDuringBuilds: true, // 让 ESLint 在构建时不阻止编译
  },
};

export default nextConfig;
