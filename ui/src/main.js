import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/* Styles */
import "@/assets/css/normalize.css";
import "@/assets/css/main.css";

new Vue({
  render: h => h(App)
}).$mount("#app");
