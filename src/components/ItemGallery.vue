<template>
  <div v-on@click="onClick">
    <img
      :src="src"
      :alt="alt"
      class="img-fluid"
    />
    <p>{{ caption }}</p>
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
    caption: {
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
