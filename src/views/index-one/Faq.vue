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
            <h2>FAQ</h2>
            <p>Kumpulan pertanyaan yang sering ditanyakan</p>
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
          <accordian
            v-if="computedData"
            :contents="computedData"
          />
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
      data: []
    }
  },
  computed: {
    computedData() {
      return this.data.reduce(
        (acc, item) => [
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

<style>
#faq ol,
#faq ul {
  list-style: circle;
  padding-left: 1rem;
}
</style>
