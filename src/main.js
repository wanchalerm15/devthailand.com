import Vue from 'vue';
import router from './router';
import store from './store';
import App from './app.vue';
import './validator';
import './directives'

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});