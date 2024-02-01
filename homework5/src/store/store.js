import {legacy_createStore as createStore, combineReducers} from "redux";
import marketReducer from "./marketReducer.js";
// import {createStore} from 'redux'
// import rootReducer from "./marketReducer.js";

const rootReducer = combineReducers({
    marketState: marketReducer
})

export const store = createStore(rootReducer)
