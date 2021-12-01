<!--
 * @Author: your name
 * @Date: 2021-06-18 13:49:01
 * @LastEditTime: 2021-07-18 08:31:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TotalSales/index.vue
-->
<template>
  <common-card title="累计销售额" :value="salesToday">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">{{ salesGrowthLastDay }}</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">{{ salesGrowthLastMonth }}</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">{{ salesLastDay }}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin, commonDataMixin],
  data() {
    return {

    }
  },
// 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
