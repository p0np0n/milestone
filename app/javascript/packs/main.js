import Application from "../components/application.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "./configuration/router";

Vue.use(VueRouter);
Vue.use(Vuetify);

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#milestone-application",
    name: "AppRoot",
    vuetify: new Vuetify(),
    router,
    render: (h) => h(Application),
  });
});
