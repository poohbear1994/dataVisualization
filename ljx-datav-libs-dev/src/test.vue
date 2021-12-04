<!--
 * @Author: your name
 * @Date: 2021-12-02 21:22:29
 * @LastEditTime: 2021-12-02 21:43:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ljx-datav-libs-dev/src/test.vue
-->
<template>
  <div class="test"></div>
</template>

<script>
export default {
  name: 'TestComponent',
  setup() {
    const message = 'hello word!'
    return {
      message
    }
  }
}
</script>
<style lang="scss" scoped>
  .test {
    color: red;
  }
</style>