<template>
  <section
    id="gallery"
    class="ptb-100"
  >
    <div class="container">
      <div class="section-heading text-center mb-5">
        <h2>Galeri E-SEA</h2>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
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
            <ItemGallery
              v-for="item in data"
              :key="item.no"
              :src="item.image"
              :alt="item.title"
            />
          </carousel>
        </div>
        <div class="col-12 col-md-6">
          <div class="row d-none d-sm-flex">
            <div
              v-for="item in data"
              :key="item.no"
              class="col-12 col-sm-6"
            >
              <ItemGallery
                :src="item.image"
                :alt="item.title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'
import ItemGallery from '../../components/ItemGallery.vue'

export default {
  name: 'Gallery',
  components: { carousel, ItemGallery },
  data() {
    return {
      data: null
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
</style>
