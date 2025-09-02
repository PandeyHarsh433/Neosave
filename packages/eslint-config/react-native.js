import { config as baseConfig } from "./base.js"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReactNative from "eslint-plugin-react-native"
import globals from "globals"

/**
 * ESLint configuration for React Native applications.
 */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-native": pluginReactNative
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        __DEV__: "readonly"
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-color-literals": "warn",
      "react-native/no-raw-text": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  }
]
