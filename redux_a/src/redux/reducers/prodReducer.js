import { ActionTypes } from "../constants/action-types"

const initState = {
    products:[]
}


export const productReducer = (state=initState, {type, payload})=>{
    switch (type){
        case ActionTypes.SET_PRODUCT:
            return {...state, products:payload};
        default:
            return state;
    }

}

export const selectedProductReducer = (state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return {...state,...payload}
        default:
            return state;

    }
}