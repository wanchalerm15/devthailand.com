import Vue from 'vue';
import VueRouter from 'vue-router';
import Url from '../url.json';
import cookie from '../store/cookie';

Vue.use(VueRouter);

import Home from '../components/home.vue';
import Login from '../components/login.vue';
import Admin from '../components/admin.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: Url.Home, component: Home },
        { path: Url.Login, component: Login, beforeEnter: UnAuthenGuard },
        { path: Url.Admin.Home, component: Admin, beforeEnter: AuthenGuard }
    ]
});

function UnAuthenGuard(to, form, next) {
    if (cookie.authen())
        return next(Url.Home);
    next();
}

function AuthenGuard(to, form, next) {
    if (cookie.authen())
        return next();
    next(Url.Login);
}

export default router;