import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);

const state = {
    countUser: null,
    categories: []
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});