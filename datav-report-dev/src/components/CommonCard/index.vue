<!--
 * @Author: your name
 * @Date: 2021-06-18 13:44:06
 * @LastEditTime: 2021-06-18 16:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/CommonCard/index.vue
-->
<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonCard',
  components: {

  },
  props: {
    title: String,
    value: String
  },
  data () {
    return {

    }
  },
// 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */
span {
  font-size: 12px;
}
.common-card {
  .title {
    font-size: 12px;
    color: #999;
  }
  .value{
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart{
    height: 50px;
  }
  .line{
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total{
    font-size: 12px;
    color: #666;
  }
}
</style>

<style>
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.increase {
    width: 0;
    height: 0;
    border-width: 5px;
    border-color: transparent transparent red transparent;
    border-style: solid;
    margin: 0 0 3px 5px;
  }
</style>
