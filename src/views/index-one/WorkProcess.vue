<template>
  <section
    id="process"
    class="work-process-section position-relative"
    v-bind:class="{
      'gray-light-bg': isGray,
      'pb-100': paddingBottom,
      'pt-100': paddingTop
    }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h2>FAQ</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              officia excepturi laborum voluptate delectus porro exercitationem
              saepe soluta eligendi alias blanditiis distinctio hic, tenetur.
            </p>
          </div>
        </div>
      </div>
      <div
        class="row align-items-center justify-content-md-center justify-content-sm-center"
      >
        <div class="col-md-12 col-lg-6">
          <div class="work-process-wrap">
            <div class="process-single-item">
              <div class="process-icon-item left-shape">
                <div class="d-flex align-items-center">
                  <div class="process-icon mr-4">
                    <i class="fas fa-question color-primary"></i>
                  </div>
                  <div class="process-content text-left">
                    <h5>Apa itu KPRL?</h5>
                    <p>
                      KKPRL adalah dokumen kesesuaian antara rencana kegiatan
                      Pemanfaatan Ruang Laut dengan Rencana Tata Ruang dan/atau
                      Rencana Zonasi. KKPRL merupakan persyaratan dasar yang
                      wajib dimiliki oleh pelaku kegiatan secara menetap paling
                      singkat 30 (tiga puluh) Hari di perairan pesisir, wilayah
                      perairan, dan wilayah yurisdiksi untuk kegiatan berusaha
                      maupun nonberusaha
                    </p>
                  </div>
                </div>
                <svg
                  x="0px"
                  y="0px"
                  width="312px"
                  height="130px"
                >
                  <path
                    class="dashed1"
                    fill="none"
                    stroke="rgb(95, 93, 93)"
                    stroke-width="1"
                    stroke-dasharray="1300"
                    stroke-dashoffset="0"
                    d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"
                  ></path>
                  <path
                    class="dashed2"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-dasharray="6"
                    stroke-dashoffset="1300"
                    d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "
                  ></path>
                </svg>
              </div>
            </div>
            <div class="process-single-item">
              <div class="process-icon-item right-shape">
                <div class="d-flex align-items-center">
                  <div class="process-icon ml-4">
                    <i class="fas fa-question color-primary"></i>
                  </div>
                  <div class="process-content text-right">
                    <h5>Masa Berlaku KKPRL?</h5>
                    <p>
                      Berlaku sampai dengan berakhirnya Perizinan berusaha atau
                      perizinan nonberusaha.
                    </p>
                    <p>
                      Dalam hal perizinan berusaha atau perizinan nonberusaha
                      belum diterbitkan, persetujuan berlaku 2 (dua) tahun sejak
                      diterbitkan.
                    </p>
                  </div>
                </div>
                <svg
                  x="0px"
                  y="0px"
                  width="312px"
                  height="130px"
                >
                  <path
                    class="dashed1"
                    fill="none"
                    stroke="rgb(95, 93, 93)"
                    stroke-width="1"
                    stroke-dasharray="1300"
                    stroke-dashoffset="0"
                    d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"
                  ></path>
                  <path
                    class="dashed2"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-dasharray="6"
                    stroke-dashoffset="1300"
                    d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="process-single-item">
              <div class="process-icon-item left-shape mb-0">
                <div class="d-flex align-items-center">
                  <div class="process-icon mr-4">
                    <i class="fas fa-question color-primary"></i>
                  </div>
                  <div class="process-content text-left">
                    <h5>Kegiatan yang wajib KKPRL?</h5>
                    <ol>
                      <li>Pengangkatan Benda Muatan Kapal Tenggelam</li>
                      <li>Telekomunikasi</li>
                      <li>Instalasi Ketenagalistrikan</li>
                      <li>Perikanan</li>
                      <li>Perhubungan</li>
                      <li>Kegiatan Usaha Minyak dan Gas Bumi</li>
                      <li>Kegiatan Usaha Pertambangan</li>
                      <li>Mineral dan Batu Bara</li>
                      <li>Pengumpulan Data dan Penelitian</li>
                      <li>Pipa Kabel Bawah Laut</li>
                      <li>Pulau Buatan</li>
                      <li>Dumping</li>
                      <li>Kegiatan Pemanfaatan Ruang Laut Lainnya</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="img-wrap">
            <img
              src="../../assets/img/app-mobile-image-3.png"
              alt="features"
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
  name: 'WorkSection',
  props: {
    isGray: {
      type: Boolean,
      default: false
    },
    paddingTop: {
      type: Boolean,
      default: true
    },
    paddingBottom: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
ol {
  list-style: circle;
}
</style>
