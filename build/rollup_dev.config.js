const path = require('path');
const serve = require('rollup-plugin-serve');
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import livereload from 'rollup-plugin-livereload';
// const { babel } = require('@rollup/plugin-babel');
const resolveFile = function(filePath) {
    return path.join(__dirname, '..', filePath)
  }

  module.exports = {
    input: 'build/entry.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      // sourcemap: true,
    }, 
    plugins: [
        // babel({
        //     presets: ['@babel/preset-env']
        //   }),
        livereload(),
        resolve(),
        babel({
            exclude: 'node_modules/**'
          }),
          commonjs(),
        vue(),
      serve({
        port: 3001,
        contentBase: [resolveFile('example'), resolveFile('dist')]
      })
    ],
  }