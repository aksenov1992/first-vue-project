export default {
    state: {
        orderInfo: []
    },
    mutations: {
        addItemToCheckList: (state, payload ) => {
            state.orderInfo.push({
                id: payload.id,
                name: payload.name,
                price: payload.price
            })
        },
        removeItemFromOrder: (state, payload) => {
            return state.orderInfo = state.orderInfo.filter(el => el.id !== payload.id);
        }
    },
    getters: {
        computedPrice: state => {
            const initialValue = 0;
            const total = state.orderInfo.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue);
            return total;
        }
    }
}