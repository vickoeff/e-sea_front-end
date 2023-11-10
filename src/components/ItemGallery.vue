<template>
  <div class="item-gallery__wrapper">
    <div
      class="item-gallery"
      @click="onClick"
    >
      <img
        :src="src"
        :alt="alt"
        class="img-fluid"
      />
      <p class="item-gallery__caption">{{ description }}</p>
    </div>

    <div
      v-if="isShowDetail"
      class="gallery-detail__wrapper"
      @click="onClickOuterModal"
    >
      <div class="gallery-detail__box">
        <button
          class="gallery-detail__close"
          @click="isShowDetail = false"
        >
          x
        </button>
        <div class="gallery-detail__image">
          <img
            :src="src"
            :alt="alt"
            class="img-fluid"
          />
          <p class="gallery-detail__caption">{{ description }}</p>
        </div>
      </div>
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
    },
    disableClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { isShowDetail: false }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
      if (!this.disableClick) {
        this.isShowDetail = true
      }
    },
    onClickOuterModal(e) {
      if (e.target._prevClass !== 'gallery-detail__wrapper') return

      this.isShowDetail = false
    }
  }
}
</script>

<style lang="scss">
.item-gallery {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &__wrapper {
    padding: 23px;
  }

  &__caption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 8px;
    margin-bottom: 0;
    color: white;
    background: #00000075;
    transform: translateY(6rem);
    transition: 0.8s;
  }

  &:hover {
    .item-gallery__caption {
      transform: translateY(0);
    }
  }
}

.gallery-detail {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    background-color: #00000077;
  }
  &__box {
    position: relative;
    border-radius: 8px;
    max-width: 80vw;
    background-color: white;

    @media screen and (max-width: 450px) {
      max-width: 90vw;
    }
  }
  &__close {
    position: absolute;
    top: 0px;
    right: 16px;
    border: none;
    outline: none;
    color: white;
    background-color: unset;
    font-size: 24pt;
    &:focus {
      outline: unset;
    }
  }
  &__caption {
    padding: 8px;
  }
}
</style>
