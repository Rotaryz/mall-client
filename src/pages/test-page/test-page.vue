<template>
  <div class="test-page">
    <router-link tag="div" to="sample?h=123" append class="button">sample</router-link>
    <router-link tag="h1" to="/404" class="button">404页面</router-link>
    <button class="button" @click="test">to 404</button>
    <base-router-view></base-router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  const PAGE_NAME = 'TEST_PAGE'

  export default {
    name: PAGE_NAME,
    data() {
      return {
      }
    },
    created() {
      console.log(this.$route.path)
    },
    methods: {
      test() {
        this.$wechat.reLaunch('', '_404Page')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .test-page
    width: 100%
    fill-box(fixed)
    background :#fff
    z-index :20
    .button
      height :50px
</style>
