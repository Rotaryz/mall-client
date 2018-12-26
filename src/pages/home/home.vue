<template>
  <div class="home" @touchmove.prevent>
    <router-view style="z-index: 10"></router-view>
    <tab></tab>
    <h1 @click="test">test</h1>
    <h2 @click="error"> error</h2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '@components/tab/tab'
  import {navigateTo} from '@utils/mall-utils'

  const PAGE_NAME = 'HOME'

  export default {
    name: PAGE_NAME,
    page: {
      title: 'Home',
      meta: [{name: 'description', content: 'description'}]
    },
    components: {
      Tab
    },
    methods: {
      test() {
        // alert(this.$storage.get('key'))
        // let url = `/pages/demo-detail?host=${location.protocol}//${location.host}/test-page&cardId=123&orderId=1236871jashd`
        // wx.miniProgram.navigateTo({url})
        // this.$router.push('/test-page?cardId=123&orderId=1236871jashd')
        navigateTo('/test-page?cardId=123&orderId=1236871jashd')
      },
      error() {
        // wx.miniProgram.redirectTo({url: BASE_URL.errorPage})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"
</style>
