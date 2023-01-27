import {applyMiddleware, compose, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"
import thunk from 'redux-thunk'

const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnchancers = composeFunc(applyMiddleware(thunk))
const store = createStore(rootReducer(), initialState, composeEnchancers)

export default store;