<template>
  <!--hero section start-->
  <section
    class="ptb-100 bg-image overflow-hidden"
    image-overlay="10"
  >
    <div class="hero-bottom-shape-two hero-bottom-shape-bg"></div>

    <!--style="background: url('../../assets/img/hero-bottom-shape-2.svg')no-repeat bottom center"-->

    <div class="container">
      <div
        class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center"
      >
        <div class="col-md-6 col-sm-6 col-lg-5">
          <div
            v-if="data"
            class="hero-slider-content text-white py-5"
          >
            <carousel
              :autoplay="true"
              :dots="false"
              :loop="true"
              :items="1"
              :margin="0"
              :center="true"
              :nav="true"
              :nav-text="[
                `<i class='fa fa-angle-left'></i>`,
                `<i class='fa fa-angle-right'></i>`
              ]"
              class="screen-carousel owl-theme dot-indicator"
            >
              <h1
                v-for="item in data"
                :key="item.id"
                class="text-white hero-title"
              >
                {{ item.title }}
              </h1>
            </carousel>
          </div>
        </div>
        <div class="col-md-12 col-lg-6">
          <div class="img-wrap">
            <img
              src="../../assets/img/banner-illustration.png"
              alt="app image"
              class="hero-illust"
            />
          </div>
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->

    <YTModal
      url="https://www.youtube.com/watch?v=1APwq1df6Mw"
      v-if="showModal"
      @close="showModal = false"
    >
      This is my first modal
    </YTModal>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
import YTModal from '../../components/YTModal'
export default {
  name: 'Banner',
  components: { carousel, YTModal },
  data: function () {
    return {
      showModal: false,
      data: null
    }
  },
  async mounted() {
    const res = await this.$axios.get('/company-profile/home')

    if (res.data) {
      this.data = res.data
      console.log('response: ', res)
    }
  },
  methods: {
    showYouTubeModal: function (e) {
      e.preventDefault()
      this.showModal = true
    }
  }
}
</script>

<style lang="scss">
.hero-bottom-shape-bg {
  background: url('../../assets/img/hero-bottom-shape-2.svg') no-repeat bottom
    center;
}
.hero-illust {
  max-width: 50vw;
}
.hero-title {
  font-size: 2.7rem;
}
</style>
