<template>
  <div>
    <nav-bar />

    <div class="main">
      <page-header
        title="Galeri"
        subtitle="Kumpulan Foto Galeri KKP"
      />
      <section class="review-section ptb-100">
        <div class="container">
          <div class="row">
            <div
              v-for="item in data"
              :key="item.id"
              class="col-md-6 col-lg-4"
            >
              <ItemGallery
                :key="item.no"
                :src="baseApiUrl + '/company-profile/' + item.imageUrl"
                :alt="item.title"
                :description="item.description"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <site-footer :show-subscribe="true" />
    <copyright />
  </div>
</template>
<script>
import NavBar from '../views/commons/NavBar'
import PageHeader from '../views/commons/PageHeader'
import SiteFooter from '../views/commons/SiteFooter'
import Copyright from '../views/commons/Copyright'
import ItemGallery from '../components/ItemGallery.vue'
import config from '../config'

export default {
  name: 'GalleryPage',
  components: {
    SiteFooter,
    PageHeader,
    NavBar,
    Copyright,
    ItemGallery
  },
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
