const tattvaEslint = require('./src/index.cjs');

module.exports = [
    ...tattvaEslint,
    { ignores: ['examples/**', 'package/**', 'src/index.mjs'] },
];
