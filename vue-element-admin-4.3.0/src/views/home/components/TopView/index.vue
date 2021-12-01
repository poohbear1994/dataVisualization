<!--
 * @Author: your name
 * @Date: 2021-06-17 20:54:17
 * @LastEditTime: 2021-07-18 08:23:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TopView/index.vue
-->
<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
import TodayUsers from '../TodayUsers'
import TotalOrders from '../TotalOrders'
import TotalUsers from '../TotalUsers'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TodayUsers,
    TotalOrders,
    TotalUsers
  },
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

</style>
