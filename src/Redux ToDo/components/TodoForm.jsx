import React,{useState} from 'react'
import {useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
const TodoForm = () => {
    const [todo,setTodo]=useState('')
    
    const dispatch = useDispatch();
    const handleChanage=(e)=>{
        setTodo(e.target.value)
    }
    return (
        <div className="todo_form">
          
            <input type="text" className="todo_input" name="todo" value={todo} onChange={handleChanage} required/>
            <button type="submit" className="todo_addbtn" onClick={()=>dispatch(addTodo(todo),setTodo(''))}>
            <i className="fas fa-plus"></i>
            </button>
          
        </div>
    )
}

export default TodoForm
