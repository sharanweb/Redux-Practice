import { ActioTypes } from "../actions/actiontypes";

const initialState={
    list:[]
}

export const todoReducer = (state=initialState,{type, payload})=>{
    switch(type){
        case ActioTypes.ADD_TODO:
            const {id, data} = payload
            return {...state, list:[...state.list, {id:id, data:data}]}

        case ActioTypes.DELETE_TODO:
            const newlist = state.list.filter((el)=> el.id !== payload);
            //console.log(payload);
            return {...state, list:newlist }
        default:
            return state
    }
}

