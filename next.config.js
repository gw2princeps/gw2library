const path = require("path");
const { NormalModuleReplacementPlugin } = require("webpack");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.plugins.push(
      new NormalModuleReplacementPlugin(
        /.*\/@blueprintjs\/icons\/lib\/esm\/iconSvgPaths.*/,
        path.resolve(__dirname, "lib/icons.js")
      )
    );

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
