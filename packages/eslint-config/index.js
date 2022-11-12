/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./base'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./typescript', 'prettier'],
    },
  ],
};
