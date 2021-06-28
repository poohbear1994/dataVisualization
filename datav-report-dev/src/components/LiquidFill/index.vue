<!--
 * @Author: your name
 * @Date: 2021-06-28 16:26:35
 * @LastEditTime: 2021-06-28 18:33:38
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
function getColor (value) {
  return value > 0 && value <= 0.5 ? 'rgba(97, 216, 0, .7)' : value > 0.5 && value <= 0.8 ? 'rgba(204, 178, 26, .7)' : value > 0.8 ? 'rgba(241, 46, 28.7, .7)' : '#c7c7cb'
}
export default {
  name: '',
  components: {

  },
  data () {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [{
          title: 'rate',
          percent: 0.4899
        }]
      },
      chartSettings: {}
    }
  },
  methods: {

  },
// 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    this.chartSettings = {
      seriesMap: {
        rate: {
          radius: '80%',
          // 修改水球标题
          label: {
            formatter (v) {
              return `${Math.floor(v.data.value * 100)}%`
            },
            textStyle: {
              fontSize: 36,
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
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */

</style>
