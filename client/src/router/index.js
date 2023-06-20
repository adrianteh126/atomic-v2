import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DashboardPage from "../views/DashboardPage.vue";
import TodosPage from "../components/TodosView.vue";
import SettingPage from "../components/Setting.vue";
import StatisticPage from "../components/Statistic.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";


const routes = [
    {
        path: '/',
        name: 'landingPage',
        component: LandingPage,
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
        meta: { title: 'Dashboard' },
        children: [
            {
                path: '',
                name: 'todosPage',
                component: TodosPage,
                meta: { title: 'Todos' }
            },
            {
                path: 'settings',
                name: 'settingsPage',
                component: SettingPage,
                meta: { title: 'Settings' }
            },
            {
                path: 'statistic',
                name: 'StatisticPage',
                component: StatisticPage,
                meta: { title: 'Statistic' }
            },
        ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
