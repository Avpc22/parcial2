import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/LoginPage.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router