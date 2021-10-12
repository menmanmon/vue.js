const state = {
    paymentsList: [],
    // disabled: false, //нужно для кнопки "Add new cost +", чтобы делать ее неактивной
}

const mutations = {
    setPaymentsListData(state, payload) {
        state.paymentsList = payload
    },
    addDataToPaymentsList(state, payload) {
        state.paymentsList.push(payload)
    },
    // makeBtnDisabled(state, payload) {
    //     state.disabled = payload
    // },
}

const getters = {
    // получаем список paymentsList
    getPaymentsList: state => state.paymentsList,

    // получаем суммарную стоимость всех платежей
    getFullPaymentValue: state => {
        return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    },
    // getStateDisabled: state => state.disabled,
}

const actions = {
    fetchData({ commit }) {
        return new Promise((resolve) => {
            // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        date: '28.03.2020',
                        category: 'Food',
                        value: 169,
                    },
                    {
                        id: 2,
                        date: '24.03.2020',
                        category: 'Transport',
                        value: 360,
                    },
                    {
                        id: 3,
                        date: '24.03.2020',
                        category: 'Food',
                        value: 532,
                    },
                ])
            }, 1000)
        })
            .then(res => {
                // запускаем изменение состояния через commit
                commit('setPaymentsListData', res)
            })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
