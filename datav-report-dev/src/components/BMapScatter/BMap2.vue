<!--
 * @Author: your name
 * @Date: 2021-06-27 14:43:10
 * @LastEditTime: 2021-06-30 18:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/views/BMap2.vue
-->
<template>
  <ve-bmap
    :settings="chartSettings"
    height="100%"
    :title="title"
    :tooltip="{}"
    :series="chartSeries" />
</template>

<script>
import commonDataMixin from '@/mixins/commonDataMixin.js'

const convertData = (data, geo) => {
  const res = []
  data.forEach((item, index) => {
    const { name, value } = item
    const coord = geo[name]
    res.push({
      name,
      value: [...coord, value]
    })
  })
  return res
}

export default {
  name: '',
  components: {

  },
  mixins: [commonDataMixin],
  data () {
    return {
      chartSettings: {
        key: 'FC4CyOX8z21fIOwbrw7EVnOEt9GDLGe2',
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          // 是否允许缩放
          roam: false,
          // 自定义地图样式
          mapStyle: {
            /* eslint-disable */
            styleJson: [{
              'featureType': 'water',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'land',
              'elementType': 'all',
              'stylers': {
                'color': '#f3f3f3'
              }
            }, {
              'featureType': 'railway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'all',
              'stylers': {
                'color': '#fdfdfd'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'green',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'subway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'manmade',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'local',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'boundary',
              'elementType': 'all',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'building',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'label',
              'elementType': 'labels.text.fill',
              'stylers': {
                'color': '#999999'
              }
            }]
          }
        }
      },
      title: {
        text: 'poohbear外卖销售数据大盘',
        subtext: '销售趋势统计',
        // 副标题链接
        sublink: 'https://www.baidu.com',
        left: 'center'
      },
      chartSeries: []
    }
  },
  watch: {
    mapData () {
      const {data, geo} = this.mapData
      console.log(geo)
      this.chartSeries = [{
        name: '销售额',
        type: 'scatter',
        // 坐标系统，高德和百度的不同。需要指定
        coordinateSystem: 'bmap',
        data: convertData(data, geo),
        // 编码，指定tooltip的值，显示data.value中的第几个元素
        encode: {
          value: 2
        },
        // 散点样式
        itemStyle: {
          color: 'purple'
        },
        // 符号尺寸
        symbolSize (val) {
          return val[2] / 10
        },
        label: {
          // label默认不显示
          show: false,
          position: 'right',
          formatter(v) {
            return `${v.data.name} - ${v.data.value[2]}`
          }
        },
        // 强调
        emphasis: {
          label: {
            show: true
          }
        }
      }, {
        name: 'Top 10',
        // 波纹散点图
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: convertData(data.sort((a, b) => {
          return b.value - a.value
        }), geo).slice(0, 10),
        symbolSize (val) {
          return val[2] / 10
        },
        encode: {
          value: 2
        },
        label: {
          show: true,
          position: 'right',
          formatter(v) {
            return `${v.data.name} - ${v.data.value[2]}`
          }
        },
        hoverAnimation: true,
        // 波纹效果
        rippleEffect: {
          brushType: 'stroke'
        },
        itemStyle: {
          color: 'purple',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      }]
    }
  },
  methods: {

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
