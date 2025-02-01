import type { Configuration as WebpackConfiguration } from "webpack";

const commonConfig: WebpackConfiguration = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: [], // sideEffect 존재 모듈 정의
        sideEffects: false,
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            use: ["@svgr/webpack"],
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] },
          },
          {
            type: "asset",
            resourceQuery: /url/, // *.svg?url
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
  },
};

export const webpackConfig = commonConfig;
