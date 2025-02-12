import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const isBuild = process.env.NODE_ENV === "production";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  {rules:{
    "no-alert": "error",
    "no-ternary" : "warn",
    "no-console" : "warn",
    "no-console": isBuild ? "error" : "warn", // console.log() autorisé en dev, interdit en build
    "eqeqeq": isBuild ? "error" : "off",      // === obligatoire en build
    "no-warning-comments": isBuild ? "error" : "off"
  } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];