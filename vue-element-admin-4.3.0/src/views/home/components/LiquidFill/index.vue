<!--
 * @Author: your name
 * @Date: 2021-06-28 16:26:35
 * @LastEditTime: 2021-07-18 15:10:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/components/LiquidFill/index.vue
-->
<template>
  <ve-liquidfill
    :data="chartData"
    height="100%"
    :settings="chartSettings"
  />
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin.js'
function getColor(value) {
  return value > 0 && value <= 0.5 ? 'rgba(97, 216, 0, .7)' : value > 0.5 && value <= 0.8 ? 'rgba(204, 178, 26, .7)' : value > 0.8 ? 'rgba(241, 46, 28.7, .7)' : '#c7c7cb'
}
export default {
  name: '',
  components: {

  },
  mixins: [commonDataMixin],
  data() {
    return {
      chartData: {},
      chartSettings: {}
    }
  },
  watch: {
    userGrowthLastMonth() {
      console.log(this.userGrowthLastMonth)
      this.chartData = {
        columns: ['title', 'percent'],
        rows: [{
          title: '用户月同比增长',
          // 因为数据返回的值/100 > 1，而水球图只有小于1时才有水位，所以占时用1000代替
          percent: this.userGrowthLastMonth / 1000
        }]
      }
      this.chartSettings = {
        seriesMap: {
          用户月同比增长: {
            radius: '80%',
            // 修改水球标题
            label: {
              formatter(v) {
                return `${(v.data.value * 100).toFixed(2)}%`
              },
              textStyle: {
                fontSize: 24,
                color: '#999',
                fontWeight: 'normal'
              },
              position: ['50%', '50%'],
              // 文字重叠处的颜色
              insideColor: '#eee'
            },
            // 外边框
            outline: {
              itemStyle: {
                borderColor: '#aaa4a4',
                borderWidth: 1,
                color: 'none',
                shadowBlur: 0,
                shadowColor: '#fff'
              },
              borderDistance: 0
            },
            backgroundStyle: {
              color: '#fff'
            },
            itemStyle: {
              shadowBlur: 0
            },
            // 波浪振幅
            amplitude: 8,
            color: [getColor(this.chartData.rows[0].percent)]
          }
        }
      }
    }
  },
// 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */

</style>
