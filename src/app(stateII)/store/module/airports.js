export default {
    state: {
        favorites: []
    },
    // Updates the state 
    mutations: {
        UPDATE_FAVORITES(state, payload) {
            state.favorites = payload
        }
    },
    actions: {
        addToFavorites(context, payload) {
            const favorites = context.state.favorites
            favorites.push(payload)
            context.commit('UPDATE_FAVORITES', favorites)
        }
    },
}