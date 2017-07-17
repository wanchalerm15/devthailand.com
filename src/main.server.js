import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import store from './store';
import './validate';
export default context => {
    router.push(context.url);
    Object.assign(store.state, context.state);
    return Promise.resolve(new Vue({
        render: h => h(App),
        router,
        store
    }));
};