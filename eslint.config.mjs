import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
        "node_modules/", // It's good practice to ignore this too
        ".next/", 
        "lib/generated/"
    ],
  },
  // This single extend is all you need for a standard Next.js project
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;