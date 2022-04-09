import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import AudioRecorder from "vue-audio-recorder";
import VueYoutube from "vue-youtube";
import "vuesax/dist/vuesax.css";

Vue.use(Vuesax, {});
Vue.use(AudioRecorder);
Vue.use(VueYoutube);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
