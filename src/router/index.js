import { createWebHistory, createRouter } from "vue-router";


const Main = resolve => require(['../views/Main.vue'], resolve)
const CreateProject = resolve => require(['../views/CreateProject.vue'], resolve)

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/create",
    name: "CreateProject",
    component: CreateProject
  },
  
];

const router = createRouter({
    mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;