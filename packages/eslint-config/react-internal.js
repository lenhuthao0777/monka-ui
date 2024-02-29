const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: ['eslint-config-turbo', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '__tests__',
    'tsup.config.ts',
    '.turbo',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/function-component-definition': 'off',
    'turbo/no-undeclared-env-vars': 'off',
    'react/jsx-key': 'off',
    'no-dupe-class-members': 'off',
    'prefer-arrow-callback': 'off',
    'import/export': 'off',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: [
        '**/*.ts',
        '**/*.tsx',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        'no-use-before-define': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': 'off',
        'no-void': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false },
        ],
      },
    },
  ],
}
