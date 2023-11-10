<template>
  <div>
    <nav-bar />
    <div class="main">
      <banner />
      <about />
      <!-- <promo /> -->
      <approval />
      <gallery />
      <report />
      <!-- <download /> -->
      <!-- <features />
      <screenshots :is-gray="true" /> -->
      <!-- <work-process /> -->
      <!--<counter-section />
      <price :is-gray="true" />-->
      <faq />
      <!--<testimonial />
      <team :is-gray="true" />
      <blog :is-gray="true" />
      <customers />
    --></div>
    <site-footer :show-subscribe="true" />
    <copyright />
    <floating-icon />
  </div>
</template>

<script>
import NavBar from '../../views/commons/NavBar'
import Banner from '../../views/index-one/Banner'
// import Promo from '../../views/index-one/Promo'
import Approval from '../../views/index-one/Approval'
import About from '../../views/index-one/About'
// import Download from '../../views/index-one/Download'
// import Features from '../../views/index-one/Features'
// import Screenshots from '../../views/index-one/Screenshots'
// import WorkProcess from '../../views/index-one/WorkProcess'
// import CounterSection from '../../views/index-one/CounterSection'
// import Price from '../../views/index-one/Price'
// import Team from '../../views/commons/sections/Team'
import Faq from '../../views/index-one/Faq'
// import Testimonial from '../../views/index-one/Testimonial'
import Report from '../../views/index-one/Report'
// import Blog from '../../views/index-one/Blog'
import SiteFooter from '../../views/commons/SiteFooter'
import Copyright from '../../views/commons/Copyright'
import Customers from '../../views/commons/sections/Customers'
import Gallery from '../../views/index-one/Gallery'
import FloatingIcon from '../../views/commons/FloatingIcon.vue'

export default {
  name: 'IndexOne',
  components: {
    NavBar,
    Banner,
    // Promo,
    Approval,
    About,
    // Download,
    // Features,
    Gallery,
    // Screenshots,
    // WorkProcess,
    // CounterSection,
    // Price,
    Faq,
    // Testimonial,
    // Team,
    Report,
    // Blog,
    // Customers,
    SiteFooter,
    FloatingIcon,
    Copyright
  }
}
</script>
