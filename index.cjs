const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname
});

module.exports = [
    {
        ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**', 'eslint.config.*'],
    },

    ...compat.extends('airbnb'),

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                process: 'readonly',
                module: 'readonly',
                console: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            import: importPlugin,
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',

            'react/jsx-filename-extension': [
                1,
                { extensions: ['.jsx', '.tsx'] },
            ],

            'react/react-in-jsx-scope': 'off',
            'react/require-default-props': 'off',

            'import/prefer-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/extensions': 'off',
            'import/no-unresolved': 'off',

            'no-console': 'error',

            'no-underscore-dangle': [
                'error',
                { allow: ['__successMessage', '__errorMessage'] }
            ],

            'max-len': ['error', { code: 130 }],
        },
    },

    {
        files: ['**/*slice.ts'],
        rules: {
            'no-param-reassign': 'off',
        },
    },
];
