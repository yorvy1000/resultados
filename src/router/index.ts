import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../components/MainHome.vue';

const routes = [
  { path: '/', component: MainHome },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
