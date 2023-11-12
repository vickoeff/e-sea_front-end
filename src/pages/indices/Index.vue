<template>
  <div>
    <nav-bar />
    <div class="main">
      <banner />
      <about />
      <approval />
      <gallery />
      <Announcement :is-gray="true" />
      <report />
      <faq />
    </div>
    <site-footer :show-subscribe="true" />
    <copyright />
    <floating-icon />
  </div>
</template>

<script>
import NavBar from '../../views/commons/NavBar'
import Banner from '../../views/index-one/Banner'
import Approval from '../../views/index-one/Approval'
import About from '../../views/index-one/About'
import Faq from '../../views/index-one/Faq'
import Report from '../../views/index-one/Report'
import Announcement from '../../views/index-one/Announcement'
import SiteFooter from '../../views/commons/SiteFooter'
import Copyright from '../../views/commons/Copyright'
import Gallery from '../../views/index-one/Gallery'
import FloatingIcon from '../../views/commons/FloatingIcon.vue'

export default {
  name: 'IndexOne',
  components: {
    NavBar,
    Banner,
    Approval,
    About,
    Gallery,
    Faq,
    Report,
    Announcement,
    SiteFooter,
    FloatingIcon,
    Copyright
  }
}
</script>

<style lang="scss">
.main {
  @media screen and (max-width: 450px) {
    padding-top: 124px;
  }
}
</style>
