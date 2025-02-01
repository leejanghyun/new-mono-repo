import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import type { Configuration as WebpackConfiguration } from "webpack";
import { merge } from "webpack-merge";
import { webpackConfig } from "./webpack.config";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  experimental: {
    inlineCss: true,
    optimizeCss: true,
  },
  webpack: (config: WebpackConfiguration) => {
    return merge(config, webpackConfig);
  },
};

const nextConfigs = withVanillaExtract(nextConfig);

export default nextConfigs;
