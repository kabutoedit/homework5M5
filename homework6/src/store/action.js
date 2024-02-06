export const marketAction = add => {
	return {
		type: 'GET_POST',
		payload: add,
	}
}

export const increment = () => {
	return {
		type: 'Increment',
	}
}

export const addBasket = product => {
	return {
		type: 'AddBasket',
		payload: product,
	}
}
