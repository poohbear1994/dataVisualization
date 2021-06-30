/*
 * @Author: your name
 * @Date: 2021-06-29 17:03:28
 * @LastEditTime: 2021-06-30 15:57:42
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

// 数字包装
function wrapperOriginalNumber (o, k) {
  return o && o[k] ? o[k] : 0
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

      // TodayUsers组件数据
      // 今日交易用户数
      orderUser () {
        return wrapperNumber(this.reportData, 'orderUser')
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

      // TotalUsers组件数据
      // 累计用户数
      totalUser () {
        return wrapperNumber(this.reportData, 'userToday')
      },
      // 昨日用户增长率
      userGrowthLastDay () {
        return wrapperPercentage(this.reportData, 'userGrowthLastDay')
      },
      // 上月用户增长率
      userGrowthLastMonth () {
        return wrapperPercentage(this.reportData, 'userGrowthLastMonth')
      },
      // 上月用户数
      userLastMonth () {
        return wrapperOriginalNumber(this.reportData, 'userLastMonth')
      },
      // 今日用户数
      userToday () {
        return wrapperOriginalNumber(this.reportData, 'userToday')
      },

      // SalesView组件数据
      // 年销售额
      orderFullYear () {
        return wrapperArray(this.reportData, 'orderFullYear')
      },
      // 轴
      orderFullYearAxis () {
        return wrapperArray(this.reportData, 'orderFullYearAxis')
      },
      // 排行
      orderRank () {
        return wrapperArray(this.reportData, 'orderRank')
      },
      // 用户年访问量
      userFullYear () {
        return wrapperArray(this.reportData, 'userFullYear')
      },
      // 用户年访问量轴
      userFullYearAxis () {
        return wrapperArray(this.reportData, 'userFullYearAxis')
      },
      // 用户访问量排行
      userRank () {
        return wrapperArray(this.reportData, 'userRank')
      },
      wordCloudData () {
        return this.getWordCloudData()
      },
      mapData () {
        return this.getMapData()
      }
    }
}
