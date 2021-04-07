import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";
import axios from "axios";

// Axios Api Requests

let position;

navigator.geolocation.getCurrentPosition((location) => {
  position = location;
});

if (position) {
  store.dispatch("addLocation", position);
} else {
  store.dispatch("addLocation", {});
}

// const defaultLongitude = 24.8607;
// const defaultLatitude = 67.0011;

// let params = {
//   latitude: defaultLatitude,
//   longitude: defaultLongitude,
// };

axios
  .get(`http://api.alquran.cloud/v1/edition`)
  .then((response) => {
    store.dispatch("addEditions", response.data.data);
  })
  .catch((err) => console.log(err));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
