import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
   
    render() { 
        return ( 
            <div className="container">
            <button className="btn btn-primary m-2" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(item=>{
                    return(
                    <Counter key={item.id} counter={item} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}/>
                    );
                })}
            </div>
         )
    }
}
 
export default Counters;