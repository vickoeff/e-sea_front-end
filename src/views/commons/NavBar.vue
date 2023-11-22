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
            :src="baseApiUrl + '/company-profile/' + logo_1"
            alt="logo_1"
            width="104px"
            class="img-fluid logo"
          />
          <img
            :src="baseApiUrl + '/company-profile/' + logo_2"
            alt="logo_2"
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
              <a
                href="https://apps.kkp.go.id"
                target="_blank"
              >
                <button class="btn btn-brand-03">Login</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import config from '../../config'

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
      collapsed: true,
      logo_1: null,
      logo_2: null,
      baseApiUrl: config.baseApiUrl
    }
  },
  computed: {
    hasAffix: function () {
      return this.windowTop > 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.getData()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    async getData() {
      const res = await this.$axios.get(`/company-profile/profile/e-sea`)

      if (res.data) {
        this.logo_1 = res.data.logo_1
        this.logo_2 = res.data.logo_2
      }
    },
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
