/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
  },
  ignorePatterns: ['node_modules', 'dist'],
  extends: ['eslint:recommended', 'prettier'],
};
