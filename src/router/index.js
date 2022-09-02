import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import jobComp from '../views/jobs/jobs.vue'
import jobDetails from '../views/jobs/jobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: jobComp
    },
    {
        path: '/all-jobs',
        redirect: '/jobs'
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: jobDetails,
        props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: NotFound,
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router