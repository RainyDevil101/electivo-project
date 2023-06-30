import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../modules/dashboard/router';
import Home from '../modules/home/router';
import Sources from '../modules/sources/router';
import Methodology from '../modules/methodology/router';

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

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;