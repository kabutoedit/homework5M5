import products from "../data/product.json"

const initialState = {
    post: products,
    counter: 0
}

export const marketReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_POST":
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}

export default marketReducer;


export const rootReducer = (state = initialState,action) => {
    switch (action.type) {
        case "Increment" :
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}





