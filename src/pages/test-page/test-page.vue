<template>
  <div class="test-page">
    test-page
    <router-link tag="div" to="sample?h=123">sample</router-link>
    <router-link tag="h1" to="/404">404页面</router-link>
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
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .test-page
    width: 100%
</style>
