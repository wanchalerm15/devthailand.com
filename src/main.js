import Vue from 'vue';
import router from './router';
import store from './store';
import App from './app.vue';

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})