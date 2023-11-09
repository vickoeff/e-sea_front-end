<template>
  <section
    id="faq"
    class="ptb-100"
    v-bind:class="{ 'gray-light-bg': isGray }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h2>FFAQ</h2>
            <p>
              Efficiently productivate reliable paradigms before ubiquitous
              models. Continually utilize frictionless expertise whereas
              tactical relationships. Still have questions? Contact us
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
          <div class="img-wrap">
            <img
              src="../../assets/img/faq.png"
              alt="features"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-md-12 col-lg-6">
          <accordian :contents="computedData" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Accordian from '../../components/Accordian'
export default {
  name: 'Faq',
  components: {
    Accordian
  },
  props: {
    isGray: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      data: [],
      contents: [
        {
          title: 'Apa itu KPRL?',
          description: `<p>
                      KKPRL adalah dokumen kesesuaian antara rencana kegiatan
                      Pemanfaatan Ruang Laut dengan Rencana Tata Ruang dan/atau
                      Rencana Zonasi. KKPRL merupakan persyaratan dasar yang
                      wajib dimiliki oleh pelaku kegiatan secara menetap paling
                      singkat 30 (tiga puluh) Hari di perairan pesisir, wilayah
                      perairan, dan wilayah yurisdiksi untuk kegiatan berusaha
                      maupun nonberusaha
                    </p>`,
          active: false
        },
        {
          title: 'Masa Berlaku KKPRL?',
          description: `<p>
                      Berlaku sampai dengan berakhirnya Perizinan berusaha atau
                      perizinan nonberusaha.
                    </p>
                    <p>
                      Dalam hal perizinan berusaha atau perizinan nonberusaha
                      belum diterbitkan, persetujuan berlaku 2 (dua) tahun sejak
                      diterbitkan.
                    </p>`,
          active: false
        },
        {
          title: 'Kegiatan yang wajib KKPRL?',
          description: `<ol>
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
                    </ol>`,
          active: false
        }
      ]
    }
  },
  computed: {
    computedData() {
      return this.data.reduce(
        (item, acc) => [
          ...acc,
          {
            title: item.ask,
            description: item.answer,
            active: false
          }
        ],
        []
      )
    }
  },
  async mounted() {
    const res = await this.$axios.get(`/company-profile/faq`)

    if (res.data) {
      this.data = res.data
    }
  }
}
</script>

<style scoped>
ol {
  list-style: circle;
}
</style>
