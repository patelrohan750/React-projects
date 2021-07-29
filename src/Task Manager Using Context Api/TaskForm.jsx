import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from './TaskListContext';

const TaskForm = () => {
    const { addTask, clearAll, editItem, editTask } = useContext(TaskListContext)
    const [title, setTitle] = useState("")
    useEffect(() => {
        if (editItem) {
            console.log(editItem)
            setTitle(editItem.title)
        } else {
            setTitle("")
        }
    }, [editItem])

    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle("")
        }else{
            editTask(title,editItem.id)
           
        }
    }
    return (
        <div>
            <form className="custom_form" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Add Task..."
                    value={title}
                    onChange={handleInput}
                    required
                    className="task_input"
                />
                <div className="buttons mt-3">
                    <button type="submit" className="me-2 add_task_btn">
                       {editItem?'Edit Task':'Add Task'}
                    </button>
                    <button className="me-2 clear_btn" onClick={() => {
                        clearAll()
                    }}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm
