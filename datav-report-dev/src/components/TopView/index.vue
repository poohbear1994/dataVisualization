<!--
 * @Author: your name
 * @Date: 2021-06-17 20:54:17
 * @LastEditTime: 2021-06-18 14:04:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TopView/index.vue
-->
<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <today-users></today-users>
        </el-card>
      </el-col>
      <el-col :span="6" :offset="0">
        <el-card shadow="hover">
          <total-users></total-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '@/components/TotalSales'
import TodayUsers from '@/components/TodayUsers'
import TotalOrders from '@/components/TotalOrders'
import TotalUsers from '@/components/TotalUsers'
export default {
  name: 'topView',
  components: {
    TotalSales,
    TodayUsers,
    TotalOrders,
    TotalUsers
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

</style>
