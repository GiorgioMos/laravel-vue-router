import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import EventList from './pages/EventList.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/events',
            name: 'events',
            component: EventList
        },
        {
            path: '/events/:id',
            name: 'event-detail',
            component: EventDetail,
            props: true
        },
    ]
});

export { router };