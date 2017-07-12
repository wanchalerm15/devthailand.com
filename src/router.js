import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/Home.vue';
import AboutComponent from './components/About.vue';
import LoginComponent from './components/Login.vue';
import Url from './Url.json';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: Url.Home, component: HomeComponent },
        { path: Url.About, component: AboutComponent },
        { path: Url.Login, component: LoginComponent },
        { path: '*', redirect: Url.Home }
    ]
});

export { Url };