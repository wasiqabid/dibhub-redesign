import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// `next lint` is deprecated in Next 15 and removed in 16, so the `lint` script
// calls the ESLint CLI. eslint-config-next 15 is still an eslintrc-style
// config, so FlatCompat adapts it to ESLint 9's flat format.
const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'design-reference/**', 'out/**'] },
  ...compat.extends('next/core-web-vitals'),
];

export default config;
