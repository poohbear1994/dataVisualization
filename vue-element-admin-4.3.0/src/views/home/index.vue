<!--
 * @Author: your name
 * @Date: 2021-06-17 17:15:17
 * @LastEditTime: 2021-07-18 08:16:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/views/Home.vue
-->
<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from './components/TopView'
import SalesView from './components/SalesView'
import MapView from './components/MapView'
import BottomView from './components/BottomView'
import {
  wordcloud,
  mapScatter,
  reportData
} from '../../api/home'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  },
  data() {
    return {
      reportData: null,
      wordCloudData: null,
      mapData: null
    }
  },
  // 提供
  provide() {
    // 这里传递的是method
    return {
      getReportData: this.getReportData,
      getWordCloudData: this.getWordCloudData,
      getMapData: this.getMapData
    }
  },
  mounted() {
    // 获取词云数据
    wordcloud()
      .then(data => {
        this.wordCloudData = data
      })
      .catch(error => {
        alert(error)
      })
    // 获取地图散点数据
    mapScatter()
      .then(data => {
        this.mapData = data
      })
    // 获取数据报表基础数据
    reportData()
      .then(data => {
        this.reportData = data
        console.log(data)
      })
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloudData() {
      return this.wordCloudData
    },
    getMapData() {
      return this.mapData
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
