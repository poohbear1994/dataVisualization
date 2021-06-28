<!--
 * @Author: your name
 * @Date: 2021-06-28 18:44:39
 * @LastEditTime: 2021-06-28 19:26:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/views/WordCloud.vue
-->
<template>
  <div id="container"></div>
</template>

<script>
import 'echarts-wordcloud'
export default {
  name: '',
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
    const data = [{
      name: '噗噗熊',
      value: 100
    }, {
      name: '数据可视化',
      value: 50
    }, {
      name: 'ljx',
      value: 25
    }]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'wordCloud',
        data,
        // 形状
        shape: 'diamond',
        // Global text style
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
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
