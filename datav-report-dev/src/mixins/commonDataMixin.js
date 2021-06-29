/*
 * @Author: your name
 * @Date: 2021-06-29 17:03:28
 * @LastEditTime: 2021-06-29 17:08:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/mixins/commonDataMixin.js
 */
export default {
  // 注入
  inject: ['getReportData', 'getWordCloudData', 'getMapData'],
    computed: {
      reportData () {
        // 在计算属性中调用传递过来的method，获取到正确的数据
        return this.getReportData()
      },
      wordCloudData () {
        return this.getWordCloudData()
      },
      mapData () {
        return this.getMapData()
      }
    }
}
