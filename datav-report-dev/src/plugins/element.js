/*
 * @Author: your name
 * @Date: 2021-06-17 20:25:25
 * @LastEditTime: 2021-06-21 15:47:21
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
  DatePicker,
  Table,
  TableColumn,
  Pagination
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
  .use(Table)
  .use(TableColumn)
  .use(Pagination)
