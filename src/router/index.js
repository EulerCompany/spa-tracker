import { createWebHistory, createRouter } from "vue-router";

import Main from '../views/Main.vue'

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/create-project",
    name: "CreateProject",
    component: () => import('../views/CreateProject.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('../views/UserHome.vue')
  },

  
];

const router = createRouter({
    mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;