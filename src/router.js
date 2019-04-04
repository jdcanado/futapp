// src/router.js

import Vue from "vue";
import Router from "vue-router";
import Callback from "./components/Callback";
import Home from "./components/Home";
import Index from "./components/Index";
import auth from "./auth/authService";
import Cadastro from "./components/Cadastro";

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
  },
  {
    path: "/index",
    name: "index",
    component: Index
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: Cadastro
  }
];

const router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" || to.path === "/callback" || auth.isAuthenticated()) {
    return next();
  }

  auth.login({ target: to.path });
});

export default router;
