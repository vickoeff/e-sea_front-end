<template>
  <section
    id="announcement"
    class="our-blog-section ptb-100"
    :class="{ 'gray-light-bg': isGray }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center">
            <h2>Pengumuman</h2>
            <p>Berikut pengumuman yang sedang tersedia</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          v-for="item in data"
          class="col-md-6 col-lg-4"
          v-bind:key="item.imageUrl"
        >
          <small-blog-item
            :id="item.id"
            :image-url="item.imageUrl"
            :day="item.day"
            :month="item.month"
            :title="item.title"
            :desc="item.desc"
          />
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-12 text-center">
          <router-link
            to="announcement"
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
import SmallBlogItem from '../../components/SmallBlogItem'
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
      data: [
        {
          id: 1,
          imageUrl: 'assets/img/blog/1.jpg',
          day: 24,
          month: 'Apr',
          title: 'Appropriately productize fully',
          desc: 'Some quick example text to build on the card title and make up the bulk.'
        },
        {
          id: 2,
          imageUrl: 'assets/img/blog/2.jpg',
          day: 24,
          month: 'Apr',
          title: 'Quickly formulate backend',
          desc: 'Synergistically engage effective ROI after customer directed partnerships.'
        },
        {
          id: 3,
          imageUrl: 'assets/img/blog/3.jpg',
          day: 24,
          month: 'Apr',
          title: 'Objectively extend extensive',
          desc: 'Holisticly mesh open-source leadership rather than proactive users.'
        }
      ]
    }
  }
}
</script>

<style></style>
