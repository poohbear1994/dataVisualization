(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ljxDataV = factory(global.vue));
})(this, (function (vue) { 'use strict';

  var script = {
    name: 'TestComponent',
    setup: function setup() {
      var message = 'hello word!';
      return {
        message: message
      };
    }
  };

  var _hoisted_1 = {
    "class": "test"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-07bdddea";
  script.__file = "src/Test.vue";

  /*
   * @Author: your name
   * @Date: 2021-12-01 21:21:19
   * @LastEditTime: 2021-12-02 21:29:36
   * @LastEditors: Please set LastEditors
   * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
   * @FilePath: /ljx-datav-libs-dev/src/index.js
   */
  function index (Vue) {
    Vue.component(script.name, script);
  }

  return index;

}));
