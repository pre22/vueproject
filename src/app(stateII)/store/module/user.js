export default {
    namespaced: true,
    state: {
        firstName: 'John',
        lastName: 'Doe',

    },

    getters: {
        fullName:(state) => {
            return `${state.firstName} ${state.lastName}`
        }
    },
}