<template>
  <section
    id="gallery"
    class="ptb-100"
  >
    <div class="container">
      <div class="section-heading text-center mb-5">
        <h2>Galeri</h2>
      </div>
      <div
        v-if="data"
        class="row"
      >
        <div class="col-12 col-md-6">
          <carousel
            :autoplay="true"
            :dots="true"
            :loop="true"
            :items="1"
            :margin="28"
            :center="true"
            :nav="true"
            :autoplay-speed="800"
            :autoplay-hover-pause="true"
            :nav-text="[
              `<i class='fa fa-angle-left'></i>`,
              `<i class='fa fa-angle-right'></i>`
            ]"
            class="screen-carousel owl-theme dot-indicator"
          >
            <ItemGallery
              v-for="item in data.slice(0, 8)"
              :key="item.no"
              :src="baseApiUrl + '/company-profile/' + item.imageUrl"
              :alt="item.title"
              :description="item.description"
              disableClick
            />
          </carousel>
        </div>
        <div class="col-12 col-md-6">
          <div class="row d-none d-sm-flex">
            <div
              v-for="item in data.slice(0, 4)"
              :key="item.no"
              class="col-12 col-sm-6"
            >
              <ItemGallery
                :src="baseApiUrl + '/company-profile/' + item.imageUrl"
                :alt="item.title"
                :description="item.description"
              />
            </div>
          </div>
        </div>
        <div class="col-12 text-center">
          <router-link
            to="gallery"
            class="see-more"
          >
            Lihat Lebih Banyak
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
import ItemGallery from '../../components/ItemGallery.vue'
import config from '../../config'

export default {
  name: 'Gallery',
  components: { carousel, ItemGallery },
  data() {
    return {
      data: null,
      baseApiUrl: config.baseApiUrl
    }
  },
  async mounted() {
    const res = await this.$axios.get(`/company-profile/gallery`)

    if (res.data) {
      this.data = res.data
    }
  }
}
</script>

<style scoped>
section {
  background-color: #f2f7fa;
}
.see-more {
  color: #3c0091;
}
.see-more:hover {
  color: aqua;
  transition: 0.8s;
}
</style>
