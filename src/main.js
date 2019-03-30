import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import AuthPlugin from "./plugins/auth";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(AuthPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
