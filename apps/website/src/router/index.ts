import { createRouter, createWebHistory } from 'vue-router';
import BytewaveMain from '../views/BytewaveMain.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [{ path: '/', name: 'BytewaveMain', component: BytewaveMain }],
});

export default router;
