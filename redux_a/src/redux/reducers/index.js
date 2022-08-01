import {combineReducers} from "redux";
import { productReducer, selectedProductReducer } from "./prodReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers;