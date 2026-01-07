import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const {
    ignores,
    typescriptConfig,
    sliceOverride,
} = require('./common-config.cjs');

const compat = new FlatCompat({
    baseDirectory: __dirname
});

export default [
    { ignores },
    ...compat.extends('airbnb'),
    typescriptConfig,
    sliceOverride,
];
