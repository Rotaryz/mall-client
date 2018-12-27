<template>
  <div class="main">
    <router-link to="/test-page" class="button"></router-link>
    <router-view @refresh="refresh"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  const PAGE_NAME = 'MAIN'
  const TITLE = '其他页面主入口'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {

      }
    },
    methods: {
      refresh() {
        // todo
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .main
    position: relative
    .button
      height :50px
</style>
