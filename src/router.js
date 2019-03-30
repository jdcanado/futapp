// src/router.js

import Vue from "vue";
import Router from "vue-router";
import Callback from "./components/Callback";
import Home from "./components/Home";

Vue.use(Router);

const routes = [
  {
    path: "/callback",
    name: "callback",
    component: Callback
  },
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
