import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"
import onlyWarn from "eslint-plugin-only-warn"

/**
 * A shared ESLint configuration for the repository.
 */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn"
    }
  },
  {
    plugins: {
      onlyWarn
    }
  },
  {
    ignores: [
      "dist/**",
      "build/**",
      "coverage/**",
      "node_modules/**",
      ".turbo/**",
      "android/**",
      "ios/**"
    ]
  }
]
