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
        <div class="col-sm-5 col-md-6 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
          <div class="download-img">
            <img
              src="../../assets/img/logo.png"
              alt="download"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-md-12 col-lg-6">
          <div class="feature-contents">
            <editor
              mode="viewer"
              v-model="data.body"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor'

export default {
  name: 'About',
  components: { Editor },
  props: {
    isGray: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    const res = await this.$axios.get(`/company-profile/about`)

    if (res.data) {
      this.data = res.data
    }
  }
}
</script>
