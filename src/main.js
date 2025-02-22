import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

/* asset imports */

import './assets/scss/main.scss';
/* plugins */
import VueScrollTo from 'vue-scrollto';
import VueYoutube from 'vue-youtube';
import BackToTop from 'vue-backtotop';
import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

/* Axios */
import initAxios from './libs/axios';

Vue.use(VueScrollTo , {offset: -250});
Vue.use(VueYoutube);
Vue.use(BackToTop);
Vue.prototype.$axios = initAxios;

gsap.registerPlugin(CSSRulePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
