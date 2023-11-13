<template>
  <div class="float-icon" @click="popIt">
    <div class="wrapper__list">
      <div class="social-icon">
        <a
          target="_blank"
          href="https://instagram.com/ditprl.kkp?igshid=NzZlODBkYWE4Ng=="
          class="color-instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div class="social-icon">
        <a target="_blank" href="https://wa.me/+6287762250001" class="color-whatsapp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      <div class="social-icon">
        <a
          class="twitter"
          target="_blank"
          href="https://x.com/ditprlkkp?s=11&t=4W3N8cNuR0tR5KZYndoY6g"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="wrapper to-circle">
      <a class="trigger">
        <i class="fas fa-phone-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingIcon",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    popIt() {
      this.isActive = !this.isActive;
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
  bottom: 26px;
  padding: 0 10px;
  cursor: pointer;
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
  bottom: 5.2rem;
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
  padding: 0 6px;
  transform: translateY(0);
}

.social-icon {
  paddding: 10px;
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
