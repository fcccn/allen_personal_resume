<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/css/reset.styl'
#app
  width 100%
  height 100%
  font-size 16px
</style>
