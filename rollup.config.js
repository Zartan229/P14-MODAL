import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/Modal.jsx',
  output: [
    {
      file: 'dist/Modal.js',
      format: 'umd',
      name: 'ModalMaxOC',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    postcss({
      modules: {
        generateScopedName: '[local]',
      },
      extract: 'style.module.css',
    }),
  ],
  external: ['react', 'react-dom'],
};
