import Vue from 'vue';
import Vuex from 'vuex';
import http, { Url } from './http';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Activities: []
    },
    mutations: {
        Activities(state) {
            return http.requestGet(Url.Admin.Activity)
                .then(res => state.Activities = res.data)
                .catch(res => console.log(res));
        }
    },
    actions: {
        Activities({ commit }) {
            commit('Activities');
        }
    },
    getters: {
        Activities: state => state.Activities
    }
});