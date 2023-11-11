<template>
  <section
    id="report"
    class="contact-us-section ptb-100"
    v-bind:class="{ 'gray-light-bg': isGray }"
  >
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div
          class="col-12 pb-3 message-box"
          v-bind:class="{
            'd-none': !isSuccess && !hasError,
            'd-block': isSuccess || hasError
          }"
        >
          <div
            class="alert"
            v-bind:class="{
              'alert-danger': hasError,
              'alert-success': isSuccess
            }"
          >
            {{ alertText }}
          </div>
        </div>
        <div class="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
          <div
            v-if="data"
            class="contact-us-form gray-light-bg rounded p-5 text-center"
          >
            <h4>Lapor</h4>
            <p>{{ data.description }}</p>
            <a
              type="submit"
              class="btn btn-brand-02"
              id="btnContactUs"
              :href="data.url"
            >
              Kirim Laporan
            </a>
          </div>
        </div>

        <div class="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
          <img
            class="img-fluid"
            src="../../assets/img/report-illust.jpg"
            alt="Report illustration"
            srcse
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Report',
  props: {
    isGray: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: null,
      alertText: '',
      hasError: false,
      isSuccess: false
    }
  },
  async mounted() {
    const res = await this.$axios.get(`/company-profile/report`)

    console.log('res', res.data[0].body)
    if (res.data[0]) {
      this.data = res.data[0].body
    }
  }
}
</script>

<style>
.report-message {
  min-height: 100px;
}
</style>
