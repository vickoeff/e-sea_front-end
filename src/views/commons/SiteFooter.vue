<template>
  <!--footer section start-->
  <!--when you want to remove subscribe newsletter container then you should remove .footer-with-newsletter class-->
  <footer
    class="footer-1 ptb-60"
    v-bind:class="{ 'footer-with-newsletter': showSubscribe }"
  >
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
          <a
            href="#"
            class="navbar-brand mb-2"
          >
            <img
              src="../../assets/img/logo-white.png"
              alt="logo"
              class="img-fluid"
            />
          </a>
          <br />
          <p>
            E-SEA merupakan Sistem Elektronik Kementerian yang dikelola dan
            diselenggarakan oleh Kementerian untuk penyelenggaraan KKPRL.
          </p>
          <!-- <div
            class="list-inline social-list-default background-color social-hover-2 mt-2"
          >
            <li class="list-inline-item">
              <a
                class="twitter"
                href="#"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="youtube"
                href="#"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="linkedin"
                href="#"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="dribbble"
                href="#"
              >
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
          </div> -->
        </div>
        <div class="col-md-12 col-lg-4 pt-5">
          <h6 class="text-uppercase">Menu</h6>
          <div class="row mt-0">
            <div class="col-6 col-sm-6 col-md-3 col-lg-3">
              <ul>
                <li>
                  <router-link to="/">Beranda</router-link>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#about'"
                    to="#about"
                  >
                    Tentang
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#perizinan'"
                    to="#perizinan"
                  >
                    Perizinan
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#faq'"
                    to="faq"
                  >
                    Pelaporan
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-3">
              <ul>
                <li>
                  <router-link
                    v-scroll-to="'#faq'"
                    to="faq"
                  >
                    Pengumuman
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#gallery'"
                    to="#gallery"
                  >
                    Galeri
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-scroll-to="'#faq'"
                    to="faq"
                  >
                    FAQ
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end of container-->
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    showSubscribe: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.footer-1 {
  background-color: #00aef0;
  color: white;
}

.footer-1 h6 {
  color: white;
}

.footer-1 ul > li a {
  color: white;
}
</style>
