<template>
  <div class="test-page">
    <router-link tag="div" to="/main/test-page/sample?h=123" class="button">sample</router-link>
    <router-link tag="h1" to="/404" class="button">404页面</router-link>
    <base-router-view></base-router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  const PAGE_NAME = 'TEST_PAGE'

  export default {
    name: PAGE_NAME,
    data() {
      return {}
    },
    created() {
      console.log(123123)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .test-page
    width: 100%
    .button
      height :50px
</style>
