import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Practise from "../views/Practise.vue";
import Task from "../views/Task.vue";
import Landing from "@/views/Landing.vue";
import Exercises from "@/views/Exercises.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/practise",
    name: "Practise",
    component: Practise,
  },
  {
    path: "/exercises",
    name: "Exercises",
    component: Exercises,
  },
  {
    path: "/exercises/:id",
    name: "Task",
    component: Task,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
