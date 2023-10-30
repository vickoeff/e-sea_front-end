<template>
  <div class="overflow-hidden">
    <section
      id="perizinan"
      class="about-us ptb-100 background-shape-img position-relative"
      v-bind:class="{ 'gray-light-bg': isGray }"
    >
      <div class="animated-shape-wrap">
        <div class="animated-shape-item"></div>
        <div class="animated-shape-item"></div>
        <div class="animated-shape-item"></div>
        <div class="animated-shape-item"></div>
        <div class="animated-shape-item"></div>
      </div>
      <div class="container">
        <div
          class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center"
        >
          <div class="col-12 mb-lg-0">
            <div class="about-content-left">
              <h2>Pelaksanaan Kesesuaian Kegiatan Pemanfaatan Ruang Laut</h2>
              <p>
                Berdasarkan Peraturan Menteri Kelautan dan Perikanan Nomor 28
                Tahun 2021, setiap orang yang melakukan kegiatan Pemanfaatan
                Ruang Laut di Perairan Pesisir, Wilayah perairan dan/atau
                wilayah yurisdiksi secara menetap di sebagian Ruang Laut paling
                singkat 30 (tiga puluh) hari wajib memiliki KKPRL. KKPRL
                merupakan persyaratan dasar Perizinan berusaha dan/atau
                penerbitan perizinan nonberusaha.
              </p>
              <p>
                Pendaftaran KKPRL dilakukan oleh Pemohon dengan menyampaikan
                permohonan:
              </p>
              <ul class="dot-circle pt-3">
                <li>
                  Persetujuan untuk kegiatan berusaha melalui Perizinan Berusaha
                  terintegrasi secara elektronik atau online single submission;
                  dan/atau
                </li>
                <li>
                  Persetujuan untuk kegiatan nonberusaha atau Konfirmasi melalui
                  sistem elektronik yang diselenggarakan oleh Kementerian dalam
                  hal ini adalah E-SEA
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-sm-5 col-md-5 col-lg-4">
                        <div class="about-content-right">
                            <img src="../../assets/img/app-mobile-image-2.png" alt="about us" class="img-fluid" />
                        </div>
                  </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    isGray: {
      type: Boolean,
      default: false
    }
  }
}
</script>
