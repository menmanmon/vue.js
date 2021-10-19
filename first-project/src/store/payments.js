const state = {
    paymentsList: [],
    allPaymentsListAsArray: [],
    activeList: [],
    page: 1,
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
        state.page = payload;
        state.activeList = state.allPaymentsListAsArray.slice(payload * 5, (payload + 1) * 5);
    }
}

const getters = {
    getPaymentsList: state => state.paymentsList,
    getActiveList: state => state.activeList,
    getAllPaymentsListAsArray: state => state.allPaymentsListAsArray,
}

const actions = {
    fetchData({ commit }, page) {
        fetch("https://raw.githubusercontent.com/manmanmon/vue.js/lesson_5/first-project/server/server.json")
            .then(res => res.json())
            .then(response => {
                commit("setPaymentsListData", response)
                commit("makeArray", response)
                if (page === 1) commit("setActiveList", response.page1)
            })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
