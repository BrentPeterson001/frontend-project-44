export default [
  {
    files: ['**/*.js', '!eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        node: true,
        es2021: true,
      },
    },
    rules: {
      'no-console': 'off',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'quote-props': ['error', 'as-needed'],
    },
  },
]
