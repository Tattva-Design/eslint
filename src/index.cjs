/* eslint-disable import/no-unresolved */
const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');

const { FlatCompat } = require('@eslint/eslintrc');
const {
  ignores, files, reduxSliceIgnoreRules, languageOptions, rules,
} = require('./common-config.cjs');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
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
