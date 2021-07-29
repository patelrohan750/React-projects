import React,{useContext} from 'react'
import {TaskListContext} from './TaskListContext';


const Task = ({tasks}) => {
    const {removeTask,findItem}=useContext(TaskListContext)
    console.log(tasks)
   
    return (
        <div>
            <li className="list_item">
                <span>{tasks.title}</span>
                <div>
                    <button
                        className="btn_delete task_btn" onClick={()=>removeTask(tasks.id)}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="btn_edit task_btn" onClick={()=>findItem(tasks.id)}>
                        <i className="fas fa-pen"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Task
