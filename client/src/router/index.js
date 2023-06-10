import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: LandingPage,
        meta: { title: 'Atomic' }
    },
    {
        path: '/login',
        name: 'loginPage',
        component: LoginPage,
        meta: { title: 'Login' }
    },
    {
        path: '/register',
        name: 'registerPage',
        component: RegisterPage,
        meta: { title: 'Register' }
    },
    {
        path: '/dashboard',
        name: 'dashboardPage',
        component: DashboardPage,
        meta: { title: 'Dashboard' }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
