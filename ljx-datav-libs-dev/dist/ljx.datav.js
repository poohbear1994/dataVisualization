(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('sam-test-data')) :
	typeof define === 'function' && define.amd ? define(['sam-test-data'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ljxDataV = factory(global.samTestData));
})(this, (function (samTestData) { 'use strict';

	/*
	 * @Author: your name
	 * @Date: 2021-12-01 21:21:19
	 * @LastEditTime: 2021-12-02 11:54:16
	 * @LastEditors: Please set LastEditors
	 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
	 * @FilePath: /ljx-datav-libs-dev/src/index.js
	 */

	console.log(samTestData.random(200));

	return samTestData.random;

}));
