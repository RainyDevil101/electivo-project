import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import MethodologyView from '../views/MethodologyView.vue';
import SourcesView from '../views/SourcesView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
    },
    {
        path: '/methodology',
        name: 'Methodology',
        component: MethodologyView,
    },
    {
        path: '/sources',
        name: 'Sources',
        component: SourcesView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;