export default {
    state: {
        orderInfo: []
    },
    mutations: {
        addItemToCheckList: (state, payload ) => {

                    state.orderInfo.push({
                        id: payload.id,
                        name: payload.name,
                        price: payload.price,
                        quantity: 1
                    })
        },
        removeItemFromOrder: (state, payload) => {
            state.orderInfo = state.orderInfo.filter(el => el.id !== payload.id);
        },
        addQuantityItem : (state, payload) => {
           state.orderInfo[payload].quantity += 1;
        }
    },
    getters: {
        computedPrice: state => {
            const initialValue = 0;
            const total = state.orderInfo.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), initialValue);
            return total;
        }
    }
}