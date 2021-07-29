import React,{useContext} from 'react'
import {TaskListContext} from './TaskListContext';
import Task from './Task';
const TaskList = () => {
    const {tasks}=useContext(TaskListContext)
    console.log(tasks)
    return (
        <div>{
            tasks.length?(
               
                    <ul className="list">
                  {tasks.map(item=>{
                      return(
                        <Task tasks={item} key={item.id}/>
                      )
                  })}
              </ul>
                
            ):(
              
                <div className="no_tasks">No Tasks</div>
              
            )
        }
             
        </div>
    )
}

export default TaskList
