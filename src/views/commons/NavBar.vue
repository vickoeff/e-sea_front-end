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
            src="../../assets/img/logo.png"
            alt="logo"
            class="img-fluid"
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
          <ul class="navbar-nav ml-auto menu">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#about'"
                to="#about"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#features'"
                to="#features"
              >
                Features
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="dropdown-toggle"
              >
                Pages
              </a>
              <ul class="sub-menu">
                <li>
                  <a
                    href="#"
                    class="dropdown-toggle-inner"
                  >
                    Login & Sign Up
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <router-link
                        v-scroll-to="'#login'"
                        to="login"
                      >
                        Login Page
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#sign-up'"
                        to="sign-up"
                      >
                        Signup Page
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#reset'"
                        to="reset"
                      >
                        Reset Password
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    class="dropdown-toggle-inner"
                  >
                    Utilities
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <router-link
                        v-scroll-to="'#faq'"
                        to="faq"
                      >
                        FAQ Page
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#404'"
                        to="404"
                      >
                        404 Page
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#coming-soon'"
                        to="coming-soon"
                      >
                        Coming Soon
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#thank-you'"
                        to="thank-you"
                      >
                        Thank You
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#download'"
                        to="download"
                      >
                        Download Page
                        <span class="badge accent-bg text-white">New</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#review'"
                        to="review"
                      >
                        Review Page
                        <span class="badge accent-bg text-white">New</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    class="dropdown-toggle-inner"
                  >
                    Team
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <router-link
                        v-scroll-to="'#team'"
                        to="team"
                      >
                        Our Team Members
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#profile'"
                        to="profile"
                      >
                        Team Member Profile
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    class="dropdown-toggle-inner"
                  >
                    Our Blog
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <router-link
                        v-scroll-to="'#blog-grid'"
                        to="blog-grid"
                      >
                        Blog Grid
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#blog-large'"
                        to="blog-large"
                      >
                        Blog No Sidebar
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#blog-left-sidebar'"
                        to="blog-left-sidebar"
                      >
                        Blog Left Sidebar
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#blog-right-sidebar'"
                        to="blog-right-sidebar"
                      >
                        Blog Right Sidebar
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#blog-details-left-sidebar'"
                        to="blog-details-left-sidebar"
                      >
                        Blog Detail Left Sidebar
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        v-scroll-to="'#blog-details-right-sidebar'"
                        to="blog-details-right-sidebar"
                      >
                        Blog Detail Right Sidebar
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#about-us'"
                    to="about-us"
                  >
                    About Us
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#contact-us'"
                    to="contact-us"
                  >
                    Contact Us
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#invoice'"
                    to="invoice"
                  >
                    Sale Invoice
                    <span class="badge badge-danger">New</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link
                v-scroll-to="'#screenshots'"
                to="#screenshots"
              >
                Screenshots
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#process'"
                to="#process"
              >
                Process
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#pricing'"
                to="#pricing"
              >
                Pricing
              </router-link>
            </li>
            <li>
              <router-link
                v-scroll-to="'#contact'"
                to="#contact"
              >
                Contact
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
