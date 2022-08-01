import { ActionTypes } from "../constants/action-types";

//setProducts
export const setProduct = (data)=>{
    return {
        type: ActionTypes.SET_PRODUCT,
        payload:data,
    }
}

export const selectProduct = (data)=>{
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload:data,
    }
}

