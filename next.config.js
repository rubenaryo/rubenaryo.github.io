/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true }
};

/**
 * To hook Contentlayer into the next dev and next build processes,
 * wrap the Next.js configuration using the withContentlayer method.
 */

module.exports = withContentlayer(nextConfig);
