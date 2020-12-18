import { applyMiddleware, combineReducers, createStore } from "redux";
import homeReducer from "./homeReducer";
import { loginReducer } from "./loginReducer";
import thunkMiddleware from 'redux-thunk'
import { appReducer } from "./appReducer";

let reducers = combineReducers({
    app: appReducer,
    homePage: homeReducer,
    loginPage: loginReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store