<template>
  <div
    v-if="isLoading"
    class="overlay"
  >
    <img
      src="../../assets/img/logo.png"
      alt="logo"
      class="logo"
    />
    <span class="loader"></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('loading', ['isLoading'])
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  display: flex;
  flex-direction: co;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 99999;
  cursor: pointer;
}
.logo {
  max-width: 300px;
}
.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  transform: rotate(45deg);
}
.loader::before {
  content: '';
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  top: -24px;
  animation: animloader 4s ease infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: #3e95f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  animation: animloader2 2s ease infinite;
}

@keyframes animloader {
  0% {
    box-shadow:
      0 24px rgba(255, 255, 255, 0),
      24px 24px rgba(255, 255, 255, 0),
      24px 48px rgba(255, 255, 255, 0),
      0px 48px rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow:
      0 24px #3e95f7,
      24px 24px rgba(255, 255, 255, 0),
      24px 48px rgba(255, 255, 255, 0),
      0px 48px rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow:
      0 24px #3e95f7,
      24px 24px #3e95f7,
      24px 48px rgba(255, 255, 255, 0),
      0px 48px rgba(255, 255, 255, 0);
  }
  37% {
    box-shadow:
      0 24px #3e95f7,
      24px 24px #3e95f7,
      24px 48px #3e95f7,
      0px 48px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow:
      0 24px #3e95f7,
      24px 24px #3e95f7,
      24px 48px #3e95f7,
      0px 48px #3e95f7;
  }
  62% {
    box-shadow:
      0 24px rgba(255, 255, 255, 0),
      24px 24px #3e95f7,
      24px 48px #3e95f7,
      0px 48px #3e95f7;
  }
  75% {
    box-shadow:
      0 24px rgba(255, 255, 255, 0),
      24px 24px rgba(255, 255, 255, 0),
      24px 48px #3e95f7,
      0px 48px #3e95f7;
  }
  87% {
    box-shadow:
      0 24px rgba(255, 255, 255, 0),
      24px 24px rgba(255, 255, 255, 0),
      24px 48px rgba(255, 255, 255, 0),
      0px 48px #3e95f7;
  }
  100% {
    box-shadow:
      0 24px rgba(255, 255, 255, 0),
      24px 24px rgba(255, 255, 255, 0),
      24px 48px rgba(255, 255, 255, 0),
      0px 48px rgba(255, 255, 255, 0);
  }
}

@keyframes animloader2 {
  0% {
    transform: translate(0, 0) rotateX(0) rotateY(0);
  }
  25% {
    transform: translate(100%, 0) rotateX(0) rotateY(180deg);
  }
  50% {
    transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
  }
  75% {
    transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
  }
  100% {
    transform: translate(0, 0) rotateX(0) rotateY(360deg);
  }
}
</style>
