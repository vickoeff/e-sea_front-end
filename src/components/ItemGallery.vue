<template>
  <div class="item-gallery__wrapper">
    <div
      class="item-gallery"
      v-on@click="onClick"
    >
      <img
        :src="src"
        :alt="alt"
        class="img-fluid"
      />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemGallery',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style>
.item-gallery__wrapper {
  padding: 23px;
}
.item-gallery {
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 23px #ceddeb;
  cursor: pointer;
}

.item-gallery p {
  padding: 8px;
}
</style>
