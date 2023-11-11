<template>
  <div class="float-icon">
    <div class="wrapper">
      <a
        class="whatsapp"
        target="_blank"
        href="https://wa.me/087762250001"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingIcon'
}
</script>

<style scoped>
.float-icon {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 24px;
}
.wrapper {
  height: fit-content;
  padding: 0px 18px;
  background-color: white;
  border-radius: 100%;
}
.whatsapp {
  font-size: 2.7rem;
  color: greenyellow;
}
</style>
