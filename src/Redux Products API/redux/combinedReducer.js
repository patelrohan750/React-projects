import { combineReducers } from "redux";
import {productReducer,selectedReducer} from "./reducer";

const rootReducer=combineReducers({
    productReducer,selectedReducer
})

export default rootReducer