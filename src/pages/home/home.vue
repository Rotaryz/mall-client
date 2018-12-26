<template>
  <div class="home" @touchmove.prevent>
    <h1 @click="test">test</h1>
    <h2 @click="error"> error</h2>
  </div>
</template>

<script type="text/ecmascript-6">
  const PAGE_NAME = 'HOME'

  export default {
    name: PAGE_NAME,
    page: {
      title: 'Home',
    },
    methods: {
      test() {
        this.$wechat.navigateTo('/test-page?cardId=123&orderId=1236871jashd')
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
</style>
