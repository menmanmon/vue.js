import Vue from 'vue'
import Vuex from 'vuex'
import paymentsListStore from './paymentsListStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        paymentsListStore,
    }
})