/*
 * @Author: your name
 * @Date: 2021-06-29 17:03:28
 * @LastEditTime: 2021-06-29 19:17:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Data visualization/datav-report-dev/src/mixins/commonDataMixin.js
 */

// 金钱数据包装
function wrapperMoney (o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0.00'
}

// 数据百分比化
function wrapperPercentage (o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}

// 数据千分位格式化
function format (v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

// 数字包装
function wrapperNumber (o, k) {
  return o && o[k] ? format(o[k]) : 0
}

// 数组包装
function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}

export default {
  // 注入
  inject: ['getReportData', 'getWordCloudData', 'getMapData'],
    computed: {
      reportData () {
        // 在计算属性中调用传递过来的method，获取到正确的数据
        return this.getReportData()
      },

      // TotalSales组件数据
      // 累计销售额
      salesToday () {
        return wrapperMoney(this.reportData, 'salesToday')
      },
      // 销售额日增长率
      salesGrowthLastDay () {
        return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
      },
      // 销售额月增长率
      salesGrowthLastMonth () {
        return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
      },
      // 昨日销售额
      salesLastDay () {
        return wrapperMoney(this.reportData, 'salesLastDay')
      },

      // TotalOrders组件数据
      // 今日订单量
      orderToday () {
        return wrapperNumber(this.reportData, 'orderToday')
      },
      // 昨日订单量
      orderLastDay () {
        return wrapperNumber(this.reportData, 'orderLastDay')
      },
      // 订单销售趋势
      orderTrend () {
        return wrapperArray(this.reportData, 'orderTrend')
      },

      // TodayUsers用户数据
      // 今日交易用户数
      userToday () {
        return wrapperNumber(this.reportData, 'userToday')
      },
      // 退单率
      returnRate () {
        return wrapperPercentage(this.reportData, 'returnRate')
      },
      // 订单交易数据
      orderUserTrend () {
        return wrapperArray(this.reportData, 'orderUserTrend')
      },
      // 今日用户交易时刻
      orderUserTrendAxis () {
        return wrapperArray(this.reportData, 'orderUserTrendAxis')
      },
      wordCloudData () {
        return this.getWordCloudData()
      },
      mapData () {
        return this.getMapData()
      }
    }
}
