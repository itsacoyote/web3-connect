import stylistic from "@stylistic/eslint-plugin";
import pluginVitest from "@vitest/eslint-plugin";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import oxlint from "eslint-plugin-oxlint";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,ts,mts,tsx,vue}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),
  oxlint.configs["flat/recommended"],
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    arrowParens: "always",
    quoteProps: "as-needed",
    braceStyle: "1tbs",
  }),
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "sort-imports": "off",
      "vue/multi-word-component-names": "off",
      "object-curly-newline": ["error", {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 5,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      }],
      "object-property-newline": ["error"],
    },
    settings: { "import/core-modules": ["vue-router/auto-routes"] },
  },
  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },
];
