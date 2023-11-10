<template>
  <div
    class="single-blog-card card border-0 shadow-sm mt-4"
    v-bind:class="{ 'gray-light-bg': isGray }"
  >
    <div class="blog-img position-relative">
      <img
        :src="imageUrl"
        class="card-img-top"
        alt="blog"
      />
      <div class="meta-date">
        <strong>{{ day }}</strong>
        <small>{{ month }}</small>
      </div>
    </div>
    <div class="card-body">
      <h3 class="h5 mb-2 card-title">
        <a href="#">{{ title }}</a>
      </h3>
      <p class="card-text">
        {{ desc }}
      </p>
      <a
        :href="'/announcement/' + id"
        class="detail-link"
      >
        Read more
        <span class="ti-arrow-right"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallBlogItem',
  props: {
    id: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    day: {
      type: Number,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    shares: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    isGray: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped></style>
