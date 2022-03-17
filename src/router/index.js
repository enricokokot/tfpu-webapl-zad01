import { createRouter, createWebHistory } from "vue-router";
import Commits from "../views/Commits.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Commits,
  },
  {
    path: "/details",
    name: "details",
    component: () => import("../views/Details.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
