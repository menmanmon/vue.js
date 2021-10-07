const state = {
    categiryList: []
}

const getters = {
    getCategoryList: state => state.categiryList,
}

const mutations = {
    setCategories(state, payload) {
        if (!Array.isArray(payload)) {
            payload = [payload]
        }
        state.categiryList.push(...payload)
    },
}

const actions = {
    loadCategories({ commit }) {
        return new Promise((resolve) => {
            // имитируем работу с сетью
            setTimeout(() => {
                resolve(['Food', 'Transport', 'Education', 'Entertainment'])
            }, 1000);
        })
            .then(res =>
                // запускаем изменение состояния через commit
                commit('setCategories', res)
            )
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
