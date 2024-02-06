import products from '../data/product.json'

const initialState = {
	post: products,
	basketProducts: [],
	counter: 0,
}

export const addBasket = (state = initialState, action) => {
	switch (action.type) {
		case 'AddBasket':
			return {
				...state,
				basketProducts: [...state.basketProducts, action.payload],

			}
		default:
			return state
	}
}

export const marketReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_POST':
			return {
				...state,
				counter: state.counter + 1,
			}
		default:
			return state
	}
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'Increment':
			return {
				...state,
				count: state.counter + 1,
			}
		default:
			return state
	}
}
