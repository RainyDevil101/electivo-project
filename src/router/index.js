import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../modules/dashboard/router';
import Home from '../modules/home/router';
import Sources from '../modules/sources/router';
import Methodology from '../modules/methodology/router';
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
    
    {
        path: '/',
        ...Home,
    },
    {
        path: '/dashboard',
        ...Dashboard,
    },
    {
        path: '/methodology',
        ...Methodology,
    },
    {
        path: '/sources',
        ...Sources,
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component: PageNotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;