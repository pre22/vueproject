import { createStore } from 'vuex';

const state = {
    customerName: 'John Smith',
    shoppingCart: [
        {
            name: 'Jumbo Box of Teabags',
            quantity: 1,
            price: 350
        },
        {
            name: 'Packet of Fancy Biscuits',
            quantity: 1,
            price: 199
        },
    ]
};

const mutations = {};

const actions = {};

export default createStore({
    state,
    mutations,
    actions
})