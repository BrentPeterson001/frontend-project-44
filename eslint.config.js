import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      'no-console': 'off',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
    },
  },
]
