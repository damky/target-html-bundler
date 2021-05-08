import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
// import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/ship/bundle.js',
    format: 'iife',
    plugins: terser()
  },
  plugins: [
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom', replacement: 'preact/compat' }
      ]
    }),
    nodeResolve({
      extensions: ['.js']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    // typescript(),
    babel({
      presets: ['@babel/preset-react', '@babel/preset-env'],
      babelHelpers: 'inline'
    }),
    commonjs()
  ]
}
