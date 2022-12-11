/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./base'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['solid'],
      extends: ['./typescript', 'plugin:solid/recommended', 'prettier'],
    },
  ],
};
