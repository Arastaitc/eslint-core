module.exports = {
  extends: [
    "airbnb-base",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "prettier",
  ],
  env: {
    node: true,
  },
  plugins: ["import", "prettier", "eslint-comments"],
};
