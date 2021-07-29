import React, { Component } from 'react'

export default class LifeCycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             qty:0
        }
        console.log("LifeCycleC : constructor  call......... ");

    }
    componentDidMount(){
        console.log("LifeCycleC : ComponentDidMount  call......... ");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("LifeCycleC : componentDidUpdate  call......... ");
    }
    updateQty=()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }
    render() {
        return (
            <div className="mt-4">
                <h3>Cart: {this.state.qty}</h3>
                <button className="btn btn-secondary" onClick={this.updateQty}>Update quantity</button>
            </div>
        )
    }
}
