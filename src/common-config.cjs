const ignores = { ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**', 'eslint.config.*'] };

const files = ['**/*.ts', '**/*.tsx'];

const reduxSliceIgnoreRules = {
  files: ['**/*slice.ts'],
  rules: {
    'no-param-reassign': 'off',
  },
};

const languageOptions = {
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
};

const rules = {
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
  'max-len': ['error', { code: 130 }],
};

module.exports = {
  ignores,
  files,
  languageOptions,
  reduxSliceIgnoreRules,
  rules,
};
