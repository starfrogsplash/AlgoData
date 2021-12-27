/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'prettier',
  ],
};