import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2';
import { minify } from 'uglify-es';

export default [
  'import-from-lodash',
  'import-from-lodash-es',
  'import-from-lodash-es-specify-path'
].map(file => ({
  input: `src/${file}.ts`,
  output: {
    file: `rollup/${file}.js`,
    format: 'iife'
  },
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs({
      namedExports: {
        'node_modules/lodash/lodash.js': [ 'isEqual' ]
      }
    }),
    {
      transform: code => code.replace(/\/\*\* @class \*\//g, '/*@__PURE__*/')
    },
    uglify({}, minify),
  ]
}));