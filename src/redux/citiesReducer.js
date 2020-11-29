const initialState = {
    cities: [],
}

export const ActionTypes = {
    SET_CITIES: 'SET_CITIES',
}

export const ActionCreators = {
    setCities: payload => ({ type: ActionTypes.SET_CITIES, payload }),
}

export default function CitiesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_CITIES:
            return {...state, cities:[...action.payload]};
        default:
            return state;
    }
}