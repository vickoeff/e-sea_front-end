<template>
  <!--hero section start-->
  <section class="ptb-100 bg-image overflow-hidden" image-overlay="10">
    <div class="hero-bottom-shape-two hero-bottom-shape-bg"></div>

    <!--style="background: url('../../assets/img/hero-bottom-shape-2.svg')no-repeat bottom center"-->

    <div class="container">
      <div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
        <div class="col-md-12 col-lg-6">
          <div class="hero-slider-content text-white py-5">
            <h1 class="text-white h1">E-SEA</h1>
            <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda suscipit nostrum
              inventore.</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-lg-5">
          <div class="img-wrap">
            <img src="../../assets/img/app-mobile-image.png" alt="app image" class="img-fluid" />
          </div>
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->

    <YTModal url="https://www.youtube.com/watch?v=1APwq1df6Mw" v-if="showModal" @close="showModal = false">
      This is my first modal
    </YTModal>

  </section>
</template>

<script>
import YTModal from '../../components/YTModal';
export default {
  name: "Banner",
  components: { YTModal },
  data: function () {
    return {
      showModal: false
    }
  },
  methods: {
    showYouTubeModal: function (e) {
      e.preventDefault();
      this.showModal = true;
    }
  }
};
</script>

<style lang="scss">
.hero-bottom-shape-bg {
  background: url('../../assets/img/hero-bottom-shape-2.svg')no-repeat bottom center
}
</style>