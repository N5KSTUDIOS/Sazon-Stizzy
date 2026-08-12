import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subfolder of a repo that has its own package.json /
  // lockfile, so pin the Turbopack root instead of letting it walk upwards.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
