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
          <div
            class="list-inline social-list-default background-color social-hover-2 mt-2"
          >
            <li class="list-inline-item">
              <a
                class="instagram"
                target="_blank"
                href="https://instagram.com/ditprl.kkp?igshid=NzZlODBkYWE4Ng=="
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="twitter"
                target="_blank"
                href="https://x.com/ditprlkkp?s=11&t=4W3N8cNuR0tR5KZYndoY6g"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </li>
            <!--<li class="list-inline-item">
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
            </li> -->
          </div>
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
