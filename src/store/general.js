const state = {
    formVisible: null,
}
const mutations = {
    setFormVisible(state, flag) {
        state.formVisible = flag
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}
