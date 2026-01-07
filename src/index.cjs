const { FlatCompat } = require('@eslint/eslintrc');

const {
    ignores,
    typescriptConfig,
    sliceOverride,
} = require('./common-config.cjs');

const compat = new FlatCompat({
    baseDirectory: __dirname
});

module.exports = [
    {
        ignores,
    },

    ...compat.extends('airbnb'),

    typescriptConfig,

    sliceOverride,
];
