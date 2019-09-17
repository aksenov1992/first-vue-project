import Vue from 'vue';
import Vuex from 'vuex';
import listItem from './list-item'
import listCheck from './items-check';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        listItem,
        listCheck
    }
})