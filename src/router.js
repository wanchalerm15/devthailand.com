import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/Home.vue';
import AboutComponent from './components/About.vue';
import LoginComponent from './components/Login.vue';
import AdminHomeComponent from './administrator/App.vue';
import Url from './Url.json';
import Session, { storage } from './session';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: Url.Home, component: HomeComponent },
        { path: Url.About, component: AboutComponent },
        { path: Url.Login, component: LoginComponent },

        { path: Url.Admin.Home, component: AdminHomeComponent, meta: { type: "home" } },
        { path: Url.Admin.Activity, component: AdminHomeComponent, meta: { type: 'activity' } },
        { path: Url.Admin.Contact, component: AdminHomeComponent, meta: { type: 'contact' } },

        { path: '*', redirect: Url.Home }
    ]
});

export default router;