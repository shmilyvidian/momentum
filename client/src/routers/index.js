import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path:'/', 
        component: () => import('@/components/PageFrame'),
        redirect: '/register',
        children: [
            {
                path:'/register', 
                component: () => import('@/view/register'),
            },
            {
                path:'/home', 
                component: () => import('@/view/home'),
            }
        ]
    }
]

const router = new VueRouter({
    routes
});

export default router;