<!--
 * @Author: your name
 * @Date: 2021-06-18 13:55:40
 * @LastEditTime: 2021-06-29 19:59:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /datav-report-dev/src/components/TotalOrders/index.vue
-->
<template>
  <common-card title="总计用户数" :value="totalUser">
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">{{userGrowthLastDay}}</span>
        <div class="increase"></div>
        <span class="month">月同比 </span>
        <span class="emphasis">{{userGrowthLastMonth}}</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  name: 'totalUsers',
  mixins: [commonDataMixin, commonCardMixin],
  data () {
    return {

    }
  },
  methods: {
    getOptions () {
      return {
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          namr: '上月用户数',
          type: 'bar',
          // 利用stack让相同的serie重叠显示
          stack: '总量',
          barWidth: '20%',
          itemStyle: {
            color: '#45c946'
          },
          data: [this.userLastMonth]
        }, {
          namr: '今日用户',
          type: 'bar',
          stack: '总量',
          barWidth: '20%',
          itemStyle: {
            color: '#eee'
          },
          data: [this.userToday]
        }, {
          // 使用自定义图表绘制三角形
          type: 'custom',
          data: [this.userLastMonth],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
            // 计算出绘制三角形的坐标
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M511.997952 268.025732 146.975708 755.974268l730.048584 0L511.997952 268.025732',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M94.8 304.5L512 721.8l416-416-833.2-1.3z m0 0',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
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
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
