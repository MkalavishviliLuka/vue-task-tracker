import {createRouter, createWebHistory} from 'vue-router'
import About from '@/views/Hello.vue'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/say-hello',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router