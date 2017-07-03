import Vue from 'vue';
import VueRouter from 'vue-router';
import Url from './url'
Vue.use(VueRouter);

import Home from '../components/home.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: Url.Home, component: Home }
    ]
});