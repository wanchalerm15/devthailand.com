import Vue from 'vue';
import router from './router';
import store from './store';
import App from './app.vue';
export default context => {
    router.push(context.url);
    Object.assign(store.state, context.state);
    return Promise.resolve(
        new Vue({
            render: h => h(App),
            store,
            router
        })
    );
};