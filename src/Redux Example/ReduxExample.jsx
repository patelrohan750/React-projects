import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './counter'
import './counter.css'
const ReduxExample = () => {
    return (
       <Provider store={store}>
            <Counter/>
       </Provider>
    )
}

export default ReduxExample
