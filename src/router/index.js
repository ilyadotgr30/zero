import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/components/pages/main/MainPage";
import Main from "@/components/pages/main/Main";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
    },
    {
        path: '/main',
        name: 'main1',
        component: Main,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
