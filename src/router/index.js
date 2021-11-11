import Reviews from '../views/Reviews.vue'
import SubmitBook from '../views/SubmitBook.vue'
import Landing from '../views/Landing.vue'
import Tabs from '../components/Tabs.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', name: 'LandingPage', component: Landing },
    { path: '/app', name: 'Tabs', component: Tabs },
    { path: '/add-review', name: 'Review Page', component: Reviews },
    { path: '/submit-book', name: 'Submit Book Review', component: SubmitBook },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router