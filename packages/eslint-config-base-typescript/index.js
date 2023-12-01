module.exports = {
  extends: ["@arastaitc/eslint-config-base", "plugin:@typescript-eslint/recommended", "plugin:import/typescript", "prettier/@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
