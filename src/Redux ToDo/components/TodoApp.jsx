import React from 'react'
import TodoForm from './TodoForm'
// import TodoList from './TodoList'
import TodosCategory from './TodosCategory'
import { Provider } from 'react-redux'
import store from '../redux/store'
import './Todo.css'
import Header from './header'
const TodoApp = () => {
    
    return (
        <Provider store={store}>
        <div className="text-center">
        <Header/>
            <TodoForm/>
            <TodosCategory/>
        </div>
        </Provider>
    )
}

export default TodoApp
