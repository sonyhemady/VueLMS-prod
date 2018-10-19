// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import GlobalFunctions from "./mixin/GlobalFunctions";
import firebase from "firebase";
import "./components/firebaseInit";

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    //set the up into our vue initialization
    new Vue({
      el: "#app",
      router,
      template: "<App/>",
      components: { App }
    });
  }
});

/* eslint-disable no-new */
