import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ActivityView from '../views/ActivityView.vue';
import LocationsView from '../views/LocationsView.vue';
import ProductView from '../views/ProductView.vue';

// const mode = import.meta.env.MODE;
// const isDev = mode === 'development';
// const hashMode = isDev ? import.meta.env.BASE_URL : '/piesam-profile/';

const router = createRouter({
  // history: createWebHistory(hashMode),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationsView,
    },
  ],
});

export default router;
