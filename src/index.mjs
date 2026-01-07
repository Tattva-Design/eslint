import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

/* eslint-disable import/no-unresolved */
const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');

import {
    ignores, files, reduxSliceIgnoreRules, languageOptions, rules,
} from './common-config.cjs';

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    ignores,
    ...compat.extends('airbnb'),
    {
        files,
        languageOptions: { parser: typescriptEslintParser, ...languageOptions },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            import: importPlugin,
        },
        rules,
    },
    reduxSliceIgnoreRules,
];
