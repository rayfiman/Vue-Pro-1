import {createRouter, createWebHistory} from 'vue-router';

import SignUp from '@/pages/SignUp.vue';
import SignIn from '@/pages/SignIn.vue';

const routes = [
    {
        path:'/signup',
        component:SignUp,

    },
    {
        path:'/signin',
        component:SignIn
    },
    {

    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})


export default router