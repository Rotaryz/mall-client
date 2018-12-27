<template>
  <div class="home" @touchmove.prevent>
    <h1 class="button" @click="test">test</h1>
    <h2 class="button" @click="error"> error</h2>
    <h3 class="button" @click="test22">tt2222222</h3>
  </div>
</template>

<script type="text/ecmascript-6">
  // import API from '@api'
  const PAGE_NAME = 'HOME'

  export default {
    name: PAGE_NAME,
    page: {
      title: 'Home',
    },
    created() {
      // API.Global.jssdkConfig()
    },
    methods: {
      test() {
        this.$wechat.navigateTo('/main/test-page?cardId=123&orderId=1236871jashd')
      },
      test22() {
        this.$wechat.navigateTo('/main/test-page22')
      },
      error() {
        // wx.miniProgram.redirectTo({url: BASE_URL.errorPage})
        this.$wechat.redirectTo('', '_errorPage')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .button
    height :50px
</style>
