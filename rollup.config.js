import commonjs from 'rollup-plugin-commonjs';
import htmlImport from 'rollup-plugin-html-imports';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'src/main.js',
  dest: 'build/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    nodeResolve({ jsnext: true }),
    htmlImport({include: '**/*.html' }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    // eslint({
    //   exclude: []
    // }),
  ],
};
