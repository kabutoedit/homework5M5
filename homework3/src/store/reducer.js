const initialState = {
    counter: 0
}

export const counterReducer  = (state = initialState,action) => {
    switch (action.type) {
        case "Increment":
            return {
                ...state,
                counter: state.counter + 10
            }
        case "Decrement":
            return {
                ...state,
                counter: state.counter - 10
            }
        default:
            return state
    }
}

