import Vue from 'vue'

const state = {
    paymentsList: [],
    allPaymentsListAsArray: [],
    activeList: [],
    page: 1,
    currentItem: {},
    numberОfLinesPerSheet: 5,
    item: null,
}

const mutations = {
    setPaymentsListData(state, payload) {
        state.paymentsList = payload
        // Object.assign(state.paymentsList, payload)
    },
    addDataToAllPaymentsListAsArray(state, payload) {
        state.allPaymentsListAsArray.push(payload)
    },
    setActiveList(state, payload) {
        state.activeList = payload
    },
    makeArray(state, payload) {
        state.allPaymentsListAsArray = [].concat(...Object.values(payload));
    },
    showPaymentsOnDisplay(state, payload) {
        state.activeList = state.allPaymentsListAsArray.slice((payload - 1) * state.numberОfLinesPerSheet, payload * state.numberОfLinesPerSheet);
    },
    setCurrentItem(state, item) {
        Vue.set(state, 'currentItem', item)
    },
    defineCurrentPage(state, payload) {
        state.page = payload
    },
}

const getters = {
    getPaymentsList: state => state.paymentsList,
    getActiveList: state => state.activeList,
    getAllPaymentsListAsArray: state => state.allPaymentsListAsArray,
}

const actions = {
    fetchData({ commit }, page) {
        fetch("https://raw.githubusercontent.com/manmanmon/vue.js/lesson_6/server/server.json")
            .then(res => res.json())
            .then(response => {
                commit("setPaymentsListData", response)
                commit("makeArray", response)
                if (page === 1) commit("setActiveList", response.page1)
            })
    },
    removeItem({ commit, state }, item) {
        const list = state.allPaymentsListAsArray.filter(el => el.id !== item.id)
        commit('setActiveList', list.slice((state.page - 1) * state.numberОfLinesPerSheet, state.page * state.numberОfLinesPerSheet))
        commit('makeArray', list)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
