import React,{useRef} from 'react'
import {useDispatch } from 'react-redux'


const Todo = ({todo,updateTodo,completeTodo,deleteTodo}) => {
    console.log(todo)
    const dispatch = useDispatch();
  
    
    const inputRef = useRef(true)
    const changeFocus=()=>{
        inputRef.current.disabled=false;
        inputRef.current.focus();
    }
    const update=(id,value,e)=>{
        console.log(e)
        if(e.key === 'Enter'){
            console.log("enter click");
            dispatch(updateTodo(id,value))
            inputRef.current.disabled=true;
            
        }
        // 
    }
    return (
        <div className="todo_card">
            <li className="todo_list_item">
               <textarea ref={inputRef} disabled={inputRef} defaultValue={todo.title} 
                   onKeyPress={(e)=>update(todo.id,inputRef.current.value,e)}
               />
                <div className="todo_btns">
                <button className="todo_btn_edit"  onClick={()=>changeFocus()}>
                        <i className="fas fa-pen"></i>
                    </button>
                  {
                    todo.completed===false && 
                    <button
                        className="todo_btn_delete" style={{color:"green"}} onClick={()=>dispatch(completeTodo(todo.id))}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  }
                   
                   
                    <button
                        className="todo_btn_delete" style={{color:"red"}} onClick={()=>dispatch(deleteTodo(todo.id))}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
                {todo.completed && <span className="completed">Done</span>}
            </li>
        </div>
    )
}

export default Todo
