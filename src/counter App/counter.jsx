import React, { Component } from "react";

class Counter extends Component {
   
 
  formatCode() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses(){
    let classes="badge m-3 "
    classes+=(this.props.counter.value===0)?"bg-warning text-dark":"bg-primary"
    return classes
  }

  render() {
  console.log(this.props);



    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.formatCode()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary ">Increment</button>
        <button className="btn btn-danger m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }
}

export default Counter;
