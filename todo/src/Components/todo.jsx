import { useState } from "react";
import { addTodo, deleteTodo } from "../Redux/actions/todoaction";
import {useDispatch, useSelector} from "react-redux"


export const Todo = ()=>{
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    //console.log("text",text)
    const list = useSelector((state)=>state.todoReducer.list)


    return (
        <div>
            <h1>Hello Sharan</h1>
            <div className="add items">
                <input type="text" placeholder="add todo here" onChange={(e)=>setText(e.target.value)}></input>
                <button onClick={()=>dispatch(addTodo(text))}>Add</button>
            </div>
            <div>
                {
                    list.map((el)=>(
                       <div key={el.id}>
                          <p>el.data</p>
                          <button onClick={()=> dispatch(deleteTodo(el.id))}>Delete</button>
                       </div>
                    ))
                }
            </div>
        </div>
    )

}