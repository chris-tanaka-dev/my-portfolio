import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      '**/node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.vercel/**',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      react: reactPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          // Use the project's tsconfig for path alias resolution
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': ['error'],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];

export default eslintConfig;
