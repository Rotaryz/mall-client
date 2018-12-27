<template>
  <div class="404">
    <h1 class="title">
      404
      <template v-if="resource">
        {{resource}}
      </template>
      Not Found
    </h1>
  </div>
</template>

<script type="text/ecmascript-6">
  const PAGE_NAME = 'PAGE_404'

  export default {
    name: PAGE_NAME,
    page: {
      title: '404',
      meta: [{name: 'description', content: '404'}]
    },
    props: {
      resource: {
        type: String,
        default: ''
      }
    },
    mounted() {
      this.$wechat.reLaunch('', '_404Page')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .title
    text-align: center
</style>
