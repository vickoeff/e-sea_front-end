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
        {{ title }}
      </h3>
      <editor
        class="card-text"
        mode="viewer"
        v-model="sortenDesc"
      />
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
import { Editor } from 'vuetify-markdown-editor'

export default {
  name: 'SmallBlogItem',
  components: { Editor },
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
  },
  computed: {
    sortenDesc() {
      if (this.desc.length > 100) {
        return this.desc.slice(0, 100) + '...'
      }

      return this.desc
    }
  }
}
</script>

<style>
.single-blog-card {
  min-width: 17rem !important;
}
.card-text {
  padding: 0 !important;
  max-width: 100ch;
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: wrap;
}
</style>
