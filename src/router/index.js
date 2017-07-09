import Vue from 'vue';
import VueRouter from 'vue-router';
import Authen, { Url } from './authen';
Vue.use(VueRouter);

import Home from '../components/home.vue';
import Login from '../components/login.vue';
import Admin from '../components/admin.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: Url.Home, component: Home },
        { path: Url.Login, component: Login, beforeEnter: Authen.UnAuthenGuard },
        { path: Url.Admin.Home, component: Admin, beforeEnter: Authen.AuthenGuard, props: { type: 'home' } },
        { path: Url.Admin.Category, component: Admin, beforeEnter: Authen.AuthenGuard, props: { type: 'category' } },
        { path: Url.Admin.Video, component: Admin, beforeEnter: Authen.AuthenGuard, props: { type: 'video' } },
        { path: Url.Admin.Image, component: Admin, beforeEnter: Authen.AuthenGuard, props: { type: 'image' } },
        { path: Url.Admin.VideoActive, component: Admin, beforeEnter: Authen.AuthenGuard, props: { type: 'video-active' } },
    ]
});
export default router;