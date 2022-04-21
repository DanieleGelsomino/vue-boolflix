import Vue from "vue";
import App from "./App.vue";

//! import fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

//! import flagicon
// import FlagIcon from "vue-flag-icon";
// Vue.use(FlagIcon);

//! import country-flag
import CountryFlag from "vue-country-flag";
Vue.component("country-flag", CountryFlag);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
