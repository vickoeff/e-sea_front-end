<template>
  <section
    id="announcement"
    class="our-blog-section"
  >
    <div class="overlay-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8">
            <div class="section-heading text-center">
              <h2 class="text-white">Pengumuman</h2>

              <p
                v-if="data.length > 0"
                class="text-white"
              >
                Berikut pengumuman yang sedang tersedia
              </p>
              <p
                v-else
                class="text-white"
              >
                Tidak ada pengumuman yang tersedia
              </p>
            </div>
          </div>
        </div>
        <div
          v-if="data.length > 0"
          class="row justify-content-center"
        >
          <div
            v-for="item in data"
            class="col-md-6 col-lg-4"
            v-bind:key="item.imageUrl"
          >
            <small-blog-item
              :id="item.id"
              :image-url="baseApiUrl + '/company-profile/' + item.imageUrl"
              :day="item.day"
              :month="item.month"
              :title="item.title"
              :desc="item.desc"
            />
          </div>
          <div
            v-if="data.length > 3"
            class="row justify-content-center mt-4"
          >
            <div class="col-12 text-center">
              <router-link
                to="announcement"
                class="see-more text-white"
              >
                Lihat Lebih Banyak
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SmallBlogItem from '../../components/SmallBlogItem'
import config from '../../config'
export default {
  name: 'Announcement',
  components: { SmallBlogItem },
  props: {
    isGray: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [],
      baseApiUrl: config.baseApiUrl
    }
  },
  async mounted() {
    const res = await this.$axios.get(
      '/company-profile/announcement?page=1&perPage=3'
    )
    if (res.data) {
      const normalize = res.data.data.reduce((acc, e) => {
        const publishDate = new Date(e.publish_at)
        const currentDate = new Date()
        const isShow = publishDate.getTime() <= currentDate.getTime()
        if (isShow) {
          const year = publishDate.getFullYear()
          const month = publishDate.toLocaleString('id-ID', { month: 'short' })
          const day = publishDate.getDate()
          return [
            ...acc,
            {
              id: e.id,
              imageUrl: e.imageUrl,
              day: day,
              month: month,
              title: e.title,
              desc: e.description,
              isShow
            }
          ]
        }
        return [...acc]
      }, [])
      this.data = normalize
    }
  }
}
</script>

<style>
#announcement {
  background-image: url('../../assets/img/mercusuar.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
#announcement .container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.overlay-bg {
  background-color: rgba(11, 8, 53, 0.514);
}
.see-more:hover {
  color: rgb(70, 197, 229) !important;
}
</style>
