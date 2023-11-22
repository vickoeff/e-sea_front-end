<template>
  <div class="float-icon">
    <div class="wrapper__list">
      <!-- <div class="bg-danger" v-for="item in sosmed" :key="item.id">{{ item.label }}</div> -->
      <div class="social-icon" v-for="item in sosmed" :key="item.id">
        <a target="_blank" :href="item.url" class="color-instagram">
          <img :src="url + '/company-profile/' + item.icon" :alt="item.label" />
          <!-- <i class="fab fa-instagram"></i> -->
        </a>
      </div>
    </div>
    <div class="wrapper to-circle" @click="popIt">
      <a class="trigger">
        <i class="fas fa-phone-alt"></i>
      </a>
    </div>
    <div class="whatsapp">
      <a target="_blank" :href="whatsApp.url">
        <!-- <i class="fas fa-phone-alt"></i> -->
        <img :src="url + `/company-profile/${whatsApp.icon}`" :alt="whatsApp.label" />
      </a>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import config from "../../config";
export default {
  name: "FloatingIcon",
  data() {
    return {
      isActive: false,
      sosmed: [],
      whatsApp: {},
      url: config.baseApiUrl,
    };
  },
  methods: {
    popIt() {
      this.isActive = !this.isActive;
    },

    async getSosmed() {
      const AxiosResponse = await Axios.get(
        `${config.baseApiUrl}/company-profile/social-media`
      );

      const getWahatsapp = AxiosResponse.data.find(
        (e) => e.label.toLowerCase() == "whatsapp"
      );
      const getFloat = AxiosResponse.data.filter(
        (e) => e.label.toLowerCase() != "whatsapp"
      );

      this.sosmed = getFloat;
      this.whatsApp = getWahatsapp;
    },
  },
  watch: {
    isActive: function (oldSt, newSt) {
      if (this.isActive) {
        const wrapper = document.querySelector(".wrapper");
        wrapper.classList.remove("to-circle");
        const itemList = document.querySelector(".wrapper__list");
        itemList.classList.add("wrapper__show");
      } else {
        const wrapper = document.querySelector(".wrapper");
        wrapper.classList.add("to-circle");
        const itemList = document.querySelector(".wrapper__list");
        itemList.classList.remove("wrapper__show");
      }
    },
  },

  mounted() {
    this.getSosmed();
  },
};
</script>

<style scoped>
.float-icon {
  position: fixed;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 1024;
}
.wrapper {
  background-color: white;
  border-radius: 5px;
  transition: border-radius 0.1s;
  box-shadow: 2px 1px 7px 0px #3f99f65e;
  position: fixed;
  right: 26px;
  bottom: 90px;
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.whatsapp {
  background-color: white;
  border-radius: 100%;
  transition: border-radius 0.1s;
  box-shadow: 2px 1px 7px 0px #3f99f65e;
  position: fixed;
  right: 26px;
  bottom: 25px;

  cursor: pointer;
}
.whatsapp > a > img {
  max-width: 49px;
  max-height: 49px;
  min-height: 49px;
  min-width: 49px;
}
.trigger {
  font-size: 1.5rem;
  color: #06aef0;
}
.to-circle {
  border-radius: 100%;
  transition: border-radius 1s;
}
.wrapper__list {
  opacity: 0;
  right: 26px;
  bottom: 160px;
  position: fixed;
  overflow: hidden;
  border-radius: 5px;
  transform: translateY(26px);
}

.wrapper__show {
  transition: transform 0.4s, opacity 0.1s, paddding 0.1s;
  height: fit-content;
  opacity: 1;
  background: white;
  padding: 0 10px;
  transform: translateY(0);
}

.social-icon {
  paddding: 10px;
}
.social-icon > a > img {
  max-width: 32px;
  max-height: 32px;
  min-height: 32px;
  min-width: 32px;
}

.social-icon a {
  font-size: 30px;
}

.color-whatsapp {
  color: lawngreen;
}

.color-instagram {
  color: coral;
  animation: mymove 5s infinite;
}
</style>
