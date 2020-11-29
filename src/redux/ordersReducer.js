const initialState = {
    orders: [],
}

export const ActionTypes = {
    SET_ORDERS: 'SET_ORDERS',
    NEW_ORDER: 'NEW_ORDER'
}

export const ActionCreators = {
    setOrders: payload => ({ type: ActionTypes.SET_ORDERS, payload }),
    newOrder: payload => ({ type: ActionTypes.NEW_ORDER, payload }),
}

export default function OrdersReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_ORDERS:
            return { ...state, orders: [...action.payload] };
        case ActionTypes.NEW_ORDER:
            console.log(action.payload);
            return { ...state, orders: [...state.orders, action.payload] };
        default:
            return state;
    }
}