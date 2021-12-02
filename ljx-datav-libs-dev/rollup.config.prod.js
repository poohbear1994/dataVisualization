/*
 * @Author: your name
 * @Date: 2021-12-01 21:22:32
 * @LastEditTime: 2021-12-02 21:18:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ljx-datav-libs-dev/rollup.config.dev.js
 */
const path = require('path')
// 引用rollup-plugin-node-resolve插件
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')

// 打包入口路径
const inputPath = path.resolve(__dirname, './src/index.js')

// 打包输出路径
const outputPath = path.resolve(__dirname, './dist/ljx.datav.min.js')
// 打包输出es模块的路径
const outputESPath = path.resolve(__dirname, './dist/ljx.datav.es.min.js')

console.log(inputPath)

module.exports = {
  input: inputPath,
  output: [{
    file: outputPath,
    // 输出的模块协议
    format: 'umd',
    name: 'ljxDataV'
  }, {
    file: outputESPath,
    // 输出的模块协议
    format: 'es',
  }],
  plugins: [
    // 使用rollup-plugin-node-resolve插件
    resolve(),
    commonjs(),
    babel({
      // 不进行babel编译的目录
      exclude: 'node_modules/**'
    }),
    json(),
    terser()
  ],
  external:['sam-test-data']
}