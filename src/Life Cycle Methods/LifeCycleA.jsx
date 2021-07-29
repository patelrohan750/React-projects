import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
export default class LifeCycleA extends Component {
    constructor() {
        super()
        this.state={
            name:"rohan"
        }
         console.log("LifeCycleA : constructor  call.........");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA : getDerivedStateFromProps  call.........");
        return null;
    }
    componentDidMount(){
         console.log("LifeCycleA : ComponentDidMount  call.........");
    }

    render() {
         console.log("LifeCycleA : render  call.........");
        return (
            <div>
            <h1>  LifeCycleA</h1>
              <LifeCycleB/>
            </div>
        )
    }
}
