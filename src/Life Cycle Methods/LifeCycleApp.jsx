import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA'
import LifeCycleC from './LifeCycleC'

export default class LifeCycleApp extends Component {
    render() {
        return (
            <div className="text-center mt-5">
            <LifeCycleA/>
            <LifeCycleC/>
            </div>
        )
    }
}
