import React,{createContext,useState,useEffect} from 'react'
export const TaskListContext=createContext();
const TaskListContextProvider = ({children}) => {
    const initialState=JSON.parse(localStorage.getItem('tasks'))|| []
    const [tasks,setTasks]=useState(initialState)

    const[editItem,setEditItem]=useState(null);
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])
    
    //Add Task
    const addTask=(title)=>{
        console.log(title)
        setTasks([...tasks,{
            id:new Date().getTime().toString(),
            title
        }])
       
      
    }
    //remove task
    const removeTask=(id)=>{
        const newTasks=tasks.filter(item=>item.id !==id)
        setTasks(newTasks)
    }
    //clear All tasks
    const clearAll=()=>{
        setTasks([])
    }

    const findItem=(id)=>{
        console.log(id)
        const item=tasks.find(task => task.id === id)
        console.log(item)
        setEditItem(item)
    }
    const editTask=(title,id)=>{
        const newTasks=tasks.map(task=>(task.id===id?{id,title}:task));
        console.log("newTasks",newTasks)
        setTasks(newTasks)
        setEditItem(null)
    }
    console.log(tasks)

    return (
        <TaskListContext.Provider value={{tasks,addTask,clearAll,removeTask,findItem,editTask,editItem}}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
