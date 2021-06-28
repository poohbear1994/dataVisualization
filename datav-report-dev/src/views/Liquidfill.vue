<!--
 * @Author: your name
 * @Date: 2021-06-28 16:35:12
 * @LastEditTime: 2021-06-28 17:20:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/views/Liquidfill.vue
-->
<template>
  <div id="container">
    Liquidfill
  </div>
</template>

<script>
import 'echarts-liquidfill'
export default {
  name: 'Liquidfill',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  },
// 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
// 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    // 每一个元素代表一个波浪 仅能按从大大小的方式排列
    const data = [0.68, 0.5, 0.4, 0.3]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'liquidFill',
        data,
        // 颜色与data中的元素一一对应
        color: ['red', 'blue', 'yellow', 'yellowgreen'],
        // 平时的样式
        itemStyle: {
          opacity: 0.6
        },
        // 鼠标hover时的样式
        emphasis: {
          itemStyle: {
            opacity: 1
          }
        },
        // 是否启用波浪动画
        waveAnimation: true,
        // 载入水球图时，波浪升起动画的时间
        animationDuration: 1000,
        // 波浪滚动间隔时间
        animationDurationUpdate: 1000,
        // 波浪振幅程度
        amplitude: 30,
        backgroundStyle: {
          color: '#fff',
          borderWidth: 4,
          borderColor: 'red'
        },
        // 外层框
        outline: {
          show: true,
          // 外层边框与内层的距离
          borderDistance: 10,
          // 外层边框的样式
          itemStyle: {
            borderWidth: 10,
            borderColor: 'yellow',
            shadowBlur: 'none'
          }
        },
        // 水球形状
        shape: 'diamond'
      }]
    })
  }
}
</script>

<style lang='scss' scoped>
/* @import url(); 引入css类 */
#container {
  width: 100%;
  height: 100%;
}
</style>
