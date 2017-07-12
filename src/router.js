import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/Home.vue';
import AboutComponent from './components/About.vue';
import LoginComponent from './components/Login.vue';
import AdminHomeComponent from './administrator/App.vue';
import Url from './Url.json';
import Session from './session';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: Url.Home, component: HomeComponent },
        { path: Url.About, component: AboutComponent },
        { path: Url.Login, component: LoginComponent, meta: { auth: false } },
        { path: Url.Admin.Home, component: AdminHomeComponent, meta: { auth: true } },
        { path: '*', redirect: Url.Home }
    ]
});

router.beforeEach((to, from, next) => {
    const devAuthen = Session.devAuthen();
    // administrator
    if (to.meta.auth === true && !devAuthen) {
        next(Url.Login);
    }
    // login
    else if (to.meta.auth === false && devAuthen) {
        next(Url.Admin.Home);
    }
    // no action
    else {
        next();
    }
});

export default router;