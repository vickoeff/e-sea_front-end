<template>
  <div id="app">
    <router-view />

    <back-to-top
      bottom="50px"
      right="50px"
    >
      <div
        class="scroll-top scroll-to-target primary-bg text-white"
        data-target="html"
      >
        <span class="fas fa-hand-point-up"></span>
      </div>
    </back-to-top>

    <base-loading></base-loading>
  </div>
</template>

<script>
import BackToTop from 'vue-backtotop'
import BaseLoading from './views/commons/Loading.vue'

export default {
  components: {
    BaseLoading,
    BackToTop
  }
}
</script>

<style lang="scss"></style>
