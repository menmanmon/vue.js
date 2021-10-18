const state = {
    paymentsList: [],
    activeList: [],
}

const mutations = {
    setPaymentsListData(state, payload) {
        state.paymentsList = payload
        // Object.assign(state.paymentsList, payload)
    },
    addDataToPaymentsList(state, payload) {
        state.paymentsList.push(payload)
    },
    setActiveList(state, data) {
        state.activeList = data
    }
}

const getters = {
    // получаем список paymentsList
    getPaymentsList: state => state.paymentsList,
    getActiveList: state => state.activeList,

}

const actions = {
    fetchData({ commit }, page) {
        fetch("https://raw.githubusercontent.com/manmanmon/vue.js/lesson_5/first-project/server/server.json")
            .then(res => res.json())
            .then(response => {
                commit("setPaymentsListData", response)
                if (page === 1) commit("setActiveList", response.page1)
            })
    }
    // fetchData({ commit }) {
    //     return new Promise((resolve) => {
    //         // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
    //         setTimeout(() => {
    //             resolve([
    //                 {
    //                     id: 1,
    //                     date: '28.03.2020',
    //                     category: 'Food',
    //                     value: 169,
    //                 },
    //                 {
    //                     id: 2,
    //                     date: '24.03.2020',
    //                     category: 'Transport',
    //                     value: 360,
    //                 },
    //                 {
    //                     id: 3,
    //                     date: '24.03.2020',
    //                     category: 'Food',
    //                     value: 532,
    //                 },
    //             ])
    //         }, 1000)
    //     })
    //         .then(res => {
    //             // запускаем изменение состояния через commit
    //             commit('setPaymentsListData', res)
    //         })
    // },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
