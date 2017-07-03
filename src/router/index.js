import Vue from 'vue';
import VueRouter from 'vue-router';
import Url from './url'
Vue.use(VueRouter);

import Home from '../components/home.vue';
import Login from '../components/login.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: Url.Home, component: Home },
        { path: Url.Login, component: Login }
    ]
});