<template>
  <section
    id="about"
    class="position-relative feature-section ptb-100"
    v-bind:class="{ 'gray-light-bg': isGray }"
  >
    <div class="container">
      <div
        class="row align-items-center justify-content-between justify-content-sm-center justify-content-md-center"
      >
        <div class="col-md-12 col-lg-6">
          <div class="feature-contents">
            <h2>Tentang E-SEA</h2>
            <p>
              E-SEA merupakan Sistem Elektronik Kementerian yang dikelola dan
              diselenggarakan oleh Kementerian untuk penyelenggaraan KKPRL.
            </p>
            <p>
              E-SEA digunakan oleh Pemohon untuk pendaftaran permohonan KKPRL
              kepada Menteri Kelautan dan Perikanan untuk kegiatan nonberusaha.
            </p>
            <!-- <ul class="dot-circle pt-2">
              <li>The only way your business can evolve is in information.</li>
              <li>Your app will be used by a host and for different.</li>
              <li>Intrinsicly innovate top-line expertise benefits.</li>
              <li>
                Efficiently redefine value-added internal sources without.
              </li>
            </ul> -->

            <div class="action-btns mt-4">
              <a
                href="#"
                class="btn btn-brand-02 mr-3"
              >
                Get Start Now
              </a>
              <a
                href="#"
                class="btn btn-outline-brand-02"
              >
                More About Us
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-5 col-md-6 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
          <div class="download-img">
            <img
              src="../../assets/img/about-us.png"
              alt="download"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SharePhotos',
  props: {
    isGray: {
      type: Boolean,
      default: false
    }
  }
}
</script>
