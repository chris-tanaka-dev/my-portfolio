import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Disable filesystem cache to avoid EBUSY lock errors on Windows during builds
    // See: https://webpack.js.org/configuration/cache/
    config.cache = false;
    return config;
  },
};

export default nextConfig;
