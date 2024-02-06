import { legacy_createStore as createStore, combineReducers } from 'redux'
import { marketReducer } from './reducer.js'
import { addBasket } from './reducer.js'

const rootReducer = combineReducers({
	marketState: marketReducer,
	basketState: addBasket,
})

export const store = createStore(rootReducer)