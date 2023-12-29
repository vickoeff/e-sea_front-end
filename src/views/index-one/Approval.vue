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
                v-if="data"
                mode="viewer"
                v-model="data"
              />
            </div>
          </div>
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
    const data = res.data.find((e) => e.id === 1)

    if (data) {
      this.data = data.body
    }
  }
}
</script>

<style>
.background-shape-img:before {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: url('../../assets/img/about-bg-shape.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
#perizinan ol {
  padding-left: 1rem !important;
}
#perizinan ol > li {
  list-style: lower-alpha;
}

#perizinan ul {
  padding-left: 1rem !important;
}
#perizinan ul > li {
  list-style: lower-alpha;
}
</style>
