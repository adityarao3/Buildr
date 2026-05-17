import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["inngest", "@inngest/agent-kit", "rate-limiter-flexible"],
  output: "standalone",
};

export default nextConfig;
