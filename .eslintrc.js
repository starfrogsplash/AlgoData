/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "no-unused-vars": "warn",
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'prettier',
  ],
};