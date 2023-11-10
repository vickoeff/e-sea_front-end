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
          <div class="contact-us-form gray-light-bg rounded p-5 text-center">
            <h4>Lapor</h4>
            <form
              v-on:submit="submit"
              id="contactForm"
              class="contact-us-form"
            >
              <div class="form-row">
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      type="text"
                      class="form-control report-message"
                      name="laporan"
                      placeholder="Masukan pesan laporan"
                      required="required"
                      v-model="report"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="url"
                      placeholder="Masukan Url laporan"
                      required="required"
                      v-model="url"
                    />
                  </div>
                </div>
                <div class="col-sm-12 mt-3">
                  <button
                    type="submit"
                    class="btn btn-brand-02"
                    id="btnContactUs"
                  >
                    Kirim Laporan
                  </button>
                </div>
              </div>
            </form>
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
      report: '',
      url: '',
      alertText: '',
      hasError: false,
      isSuccess: false
    }
  },
  methods: {
    submit: function (e) {
      e.preventDefault()

      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('message', this.message)
      formData.append('email', this.email)

      fetch('/php/contact-form-process.php', {
        body: formData,
        method: 'POST'
      })
        .then((response) => {
          if (response.status === 200) {
            this.name = ''
            this.message = ''
            this.email = ''
            this.alertText = 'Form submitted successfully'
            this.hasError = false
            this.isSuccess = true
          } else {
            this.alertText = 'Found error in the form. Please check again.'
            this.isSuccess = false
            this.hasError = true
          }
        })
        .catch((error) => {
          console.log(error)
          this.alertText = 'Found error in the form. Please check again.'
          this.isSuccess = false
          this.hasError = true
        })
    },
    mounted() {
      this.alertText = ''
      this.hasError = false
      this.isSuccess = false
    }
  }
}
</script>

<style>
.report-message {
  min-height: 100px;
}
</style>
