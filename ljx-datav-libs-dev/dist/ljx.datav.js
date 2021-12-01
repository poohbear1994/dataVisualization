(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ljxDataV = factory());
})(this, (function () { 'use strict';

  var a = Math.floor(Math.random() * 10);
  var b = Math.floor(Math.random() * 100);
  function random(base) {
    if (base && base % 1 === 0) {
      return Math.floor(Math.random() * base);
    } else {
      return 0;
    }
  }

  /*
   * @Author: your name
   * @Date: 2021-12-01 21:21:19
   * @LastEditTime: 2021-12-02 01:32:55
   * @LastEditors: Please set LastEditors
   * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
   * @FilePath: /ljx-datav-libs-dev/src/index.js
   */

  console.log(random, a, b);

  return random;

}));
