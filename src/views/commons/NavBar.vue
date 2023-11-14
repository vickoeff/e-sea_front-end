<template>
  <header class="header">
    <nav
      class="navbar navbar-expand-lg fixed-top"
      :class="{
        affix: hasAffix,
        'custom-nav': coloredLogo,
        'bg-transparent': !coloredLogo
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
        >
          <img
            src="../../assets/img/kkp-logo.png"
            alt="logo"
            width="104px"
            class="img-fluid logo"
          />
          <img
            src="../../assets/img/logo-white.png"
            alt="logo"
            width="200px"
            class="ml-4 img-fluid logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          :class="{ collapsed: collapsed }"
          @click="mobileNavClicked"
        >
          <span class="ti-menu" />
        </button>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse h-auto"
          :class="{ show: !collapsed }"
        >
          <ul
            class="navbar-nav ml-auto menu align-items-center"
            @click="mobileNavClicked"
          >
            <li>
              <router-link
                v-scroll-to="'#'"
                to="/"
              >
                Beranda
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#about'"
                to="/#about"
              >
                Tentang
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#perizinan'"
                to="/#perizinan"
              >
                Perizinan
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#report'"
                to="/#report"
              >
                Pelaporan
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#announcement'"
                to="/announcement"
              >
                Pengumuman
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#gallery'"
                to="/gallery"
              >
                Galeri
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#faq'"
                to="/#faq"
              >
                FAQ
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#faq'"
                to="#"
              >
                <button class="btn btn-brand-03">Login</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    coloredLogo: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      windowTop: 0,
      collapsed: true
    }
  },
  computed: {
    hasAffix: function () {
      return this.windowTop > 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: function () {
      this.windowTop = window.top.scrollY
    },
    mobileNavClicked: function () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped>
.navbar.affix .logo {
  transition: 0.8s;
  scale: 0.8;
}
</style>
