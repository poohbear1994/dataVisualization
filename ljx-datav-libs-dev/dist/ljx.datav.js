(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ljxDataV = factory());
})(this, (function () { 'use strict';

  /*
   * @Author: your name
   * @Date: 2021-12-02 11:16:35
   * @LastEditTime: 2021-12-02 11:34:31
   * @LastEditors: Please set LastEditors
   * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
   * @FilePath: /ljx-datav-libs-dev/src/plugin.js
   */

  function random() {
    console.log('random');
  }

  /*
   * @Author: your name
   * @Date: 2021-12-01 21:21:19
   * @LastEditTime: 2021-12-02 11:37:20
   * @LastEditors: Please set LastEditors
   * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
   * @FilePath: /ljx-datav-libs-dev/src/index.js
   */

  console.log(random());

  return random;

}));
