import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonJs from 'rollup-plugin-commonjs';

export default {
    input: './source/index.js',
    output: {
        file: './dist/fmihel-browser-lib.min.js',
        format: 'cjs', // umd cjs iife
        name: 'fmihel_browser_lib',
    },
    external:['jquery'],
    plugins: [

        resolve(),
        commonJs(),
        babel({
            exclude: 'node_modules/**', // only transpile our source code
        }),
        terser(),
    ],

};
