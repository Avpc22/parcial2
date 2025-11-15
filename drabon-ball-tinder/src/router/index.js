import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path: '/home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/matches',
        component: () => import('@/views/MatchPage.vue')
    },
    {
        path: '/admin',
        component: () => import('@/views/CharactersAdmin.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router