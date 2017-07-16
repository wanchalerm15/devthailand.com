import Vue from 'vue';
import Vuex from 'vuex';
import http, { Url } from './http';
import { setError } from './validate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Activities: [],
        Configs: {},
        Contacts: []
    },
    mutations: {
        Activities(state, payload) {
            state.Activities = payload;
        },
        Configs(state, payload) {
            state.Configs = payload;
        },
        Contacts(state, payload) {
            state.Contacts = payload;
        }
    },
    actions: {
        Activities({ commit }) {
            return http.requestGet(Url.Admin.Activity)
                .then(res => commit('Activities', res.data))
                .catch(res => setError(res.message));
        },
        Configs({ commit }) {
            return http.requestGet(Url.Config)
                .then(res => commit('Configs', res.data))
                .catch(res => setError(res.message));
        },
        Contacts({ commit }) {
            return http.requestGet(Url.Admin.Contact)
                .then(res => commit('Contacts', res.data))
                .catch(res => this.setError(res.message));
        }
    },
    getters: {
        Activities: state => state.Activities,
        Configs: state => state.Configs,
        Contacts: state => state.Contacts
    }
});