import { createWebHistory, createRouter } from "vue-router";
import Introduce from './components/Introduce.vue';



const routes = [
  {
    path: "/introduce",
    component: Introduce,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 