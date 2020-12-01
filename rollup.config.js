import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import commonJS from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',

  output: {
    file: 'dist/script.js',
    format: 'cjs',
  },

  plugins: [
    eslint(),

    resolve({
      browser: true,
      mainFields: ['dependencies'],
    }),

    commonJS({
      include: 'node_modules/**',
    }),

    babel({ babelHelpers: 'bundled' }),

    terser(),
  ],
};
