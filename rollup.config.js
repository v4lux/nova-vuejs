const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = {
    input: 'src/Scripts/main.js',

    plugins: [
        commonjs(),
        resolve(),
    ],

    output: {
        file: 'novavuejs.novaextension/Scripts/main.dist.js',
        format: 'cjs'
    },
}