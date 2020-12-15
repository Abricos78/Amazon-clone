import { combineReducers, createStore } from "redux";
import homeReducer from "./homeReducer";

let reducers = combineReducers({
    homePage: homeReducer
})

let store = createStore(reducers)

export default store