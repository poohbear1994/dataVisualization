/*
 * @Author: your name
 * @Date: 2021-06-17 20:25:25
 * @LastEditTime: 2021-06-20 19:07:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/plugins/element.js
 */
import Vue from 'vue'
// 按需引入button组件
import {
  Card,
  Row,
  Col,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  RadioButton,
  DatePicker
} from 'element-ui'

Vue
  .use(Card)
  .use(Row)
  .use(Col)
  .use(Menu)
  .use(MenuItem)
  .use(Radio)
  .use(RadioGroup)
  .use(RadioButton)
  .use(DatePicker)
