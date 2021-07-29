import React,{useState} from 'react'

import { deleteTodo,updateTodo,completeTodo } from '../redux/actions'
import { useSelector } from 'react-redux'
import Todo from './Todo'
const TodosCategory = () => {
    const lists = useSelector(state => state.todoReducer.todo_lists)
 
    const [sort,setSort]=useState("active")
    return (
        <div className="todo_category">
            <div className="todo_buttons">
                <button onClick={()=>setSort("active")}>Active</button>
                <button onClick={()=>setSort("completed")}>Completed</button>
                <button  onClick={()=>setSort("all")}>All</button>

            </div>
            <div className="todo_list">
            {/* for acive todos */}
            {
                lists.length>0 && sort==="active"?
                lists.map(item=>{
                    return(
                        item.completed===false &&(
                            <Todo
                                todo={item}
                                key={item.id}
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo}
                                completeTodo={completeTodo}
                            />
                        )
                    )
                }):  sort==="active"?<div className="no_tasks">no todos</div>:null
            }
              {/* for completed todos */}
              {
                lists.length>0 && sort==="completed"?
                lists.map(item=>{
                    return(
                        item.completed===true &&(
                            <Todo
                                 todo={item}
                                key={item.id}
                               
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo}
                                completeTodo={completeTodo}
                            />
                        )
                    )
                }):  null
              }
            {/* for all todos */}
            {
                lists.length>0 && sort==="all"?
                lists.map(item=>{
                    return(
                        
                            <Todo
                                todo={item}
                                key={item.id}
                               
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo}
                                completeTodo={completeTodo}
                            />
                        
                    )
                }):null
            }
            </div>
        </div>
    )
}

export default TodosCategory
