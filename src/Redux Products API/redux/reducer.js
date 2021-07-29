const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }

        default: return state
    }
}

export const selectedReducer = (state = {}, action) => {
    switch (action.type) {
        case "SELECTED_PRODUCTS":
            return {
                ...state,
                ...action.payload
            }
        case "REMOVE_SELECTED_PRODUCTS":
            return {}

        default: return state
    }
}