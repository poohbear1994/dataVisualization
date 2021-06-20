<!--
 * @Author: your name
 * @Date: 2021-06-17 20:54:17
 * @LastEditTime: 2021-06-20 20:00:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TopView/index.vue
-->
<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu class="sales-view-menu" mode="horizontal" :default-active="activeIndex" @select="onMenuSelect">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="medium">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="本年" />
            </el-radio-group>
            <el-date-picker class="sales-view-date-picker" v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" :unlink-panels="true"/>
          </div>
        </div>
      </template>
      <template v-slot:default>
        <div class="">
          222
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'salesView',
  components: {

  },
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
            picker.$emit('pick', [start, end])
          }
        }],
        onPick ({ maxDate, minDate }) {

        }
      }
    }
  },
  methods: {
    onMenuSelect (index) {
      console.log(index)
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
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    align-items: center;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
}
</style>
