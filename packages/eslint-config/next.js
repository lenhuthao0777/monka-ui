const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'eslint-config-turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['only-warn'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
        project: ['tsconfig.json', 'package/tsconfig.json'],
      },
    },
  },
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react/display-name': 'off',
    'no-return-assign': 'off',
    'react/jsx-no-bind': 'off',
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  overrides: [
    {
      files: [
        '*.js?(x)',
        '*.ts?(x)',
        '**/*.ts',
        '**/*.tsx',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
    },
  ],
}
