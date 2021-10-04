const state = {
    paymentsList: [],
}

const mutations = {
    setPaymentsListData(state, payload) {
        state.paymentsList = payload
    },
}

const getters = {
    // получаем список paymentsList
    getPaymentsList: state => state.paymentsList,

    // получаем суммарную стоимость всех платежей
    getFullPaymentValue: state => {
        return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
}
