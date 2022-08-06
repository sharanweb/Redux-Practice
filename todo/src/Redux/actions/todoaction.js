import { ActioTypes } from "./actiontypes"



export const addTodo = (data)=>{
    return {
        type: ActioTypes.ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            payload: data
        }
    }

}

export const deleteTodo = (id)=>{
    return {
        type: ActioTypes.DELETE_TODO,
        payload:id
        
    }

}

export const deleteAll = (data)=>{
    return {
        type: ActioTypes.DELETE_ALL,
        payload: data
    }

}