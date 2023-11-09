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
              <editor
                mode="viewer"
                v-model="data.body"
              />
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
import { Editor } from 'vuetify-markdown-editor'

export default {
  name: 'Approval',
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
    const res = await this.$axios.get(`/company-profile/approval`)

    if (res.data) {
      this.data = res.data
    }
  }
}
</script>
