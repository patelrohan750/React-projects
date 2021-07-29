import React from 'react'
import './TaskManger.css'
import TaskListContextProvider from './TaskListContext'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Header from './Header'
const TaskMangerApp = () => {
    return (
        <div className="bg d-flex justify-content-center align-items-center">
        <TaskListContextProvider>
        <div className="container d-flex justify-content-center align-items-center">
        <div className="app_wrapper">
        <Header/>
        <div className="main">
        <TaskForm/>
        <TaskList/>
        </div>
        </div>
        </div>
        </TaskListContextProvider>
        </div>
       
    )
}

export default TaskMangerApp
