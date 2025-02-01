import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const OFF = 0;
const WARN = 1;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-require-imports": OFF,
      "@typescript-eslint/no-explicit-any": OFF,
      "@typescript-eslint/no-unsafe-function-types": OFF,
      "@typescript-eslint/no-unused-vars": WARN,
      "@typescript-eslint/ban-ts-comment": OFF,
    },
  },
];

export default eslintConfig;
