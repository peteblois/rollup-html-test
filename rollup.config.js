import commonjs from 'rollup-plugin-commonjs';
import htmlImports from 'rollup-plugin-html-imports';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals'
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'src/index.js',
  dest: 'build/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    htmlImports(),
    buble(),
    nodeResolve({ jsnext: true }),
    commonjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**'
      ]
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  ],
};
