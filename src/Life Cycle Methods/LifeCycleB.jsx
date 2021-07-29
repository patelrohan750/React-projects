import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor() {
        super()
        this.state={
            name:"rohan"
        }
         console.log("LifeCycleB : constructor  call.........");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB : getDerivedStateFromProps  call.........");
        return null;
    }
    componentDidMount(){
         console.log("LifeCycleB : ComponentDidMount  call.........");
    }

    render() {
         console.log("LifeCycleB : render  call.........");
        return (
            <div>
            <h1>  LifeCycleB</h1>
              
            </div>
        )
    }
}
