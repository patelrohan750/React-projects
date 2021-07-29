import React, { Component } from 'react';
import Navbar from './navbar'
import Counters from './counters'


class CounterApp extends Component {

    state = {
        counters:[
            {id:1,value:4},
            {id:2,value:2},
            {id:3,value:0},
            {id:4,value:0}
        ]
      }
      handleIncrement=(counter)=>{
        console.log(counter);
        const counters=[...this.state.counters];
        const index=this.state.counters.indexOf(counter);
        console.log(index);
        counters[index].value++;
        this.setState({counters})
      }
      handleDelete=(counterId)=>{
          console.log("Delete Event trigger",counterId);
          const counters=this.state.counters.filter(c=>c.id!==counterId);
          console.log(counters);
          this.setState({counters})
      }
      handleReset=()=>{
          const counters=this.state.counters.map(c=>{
              c.value=0;
              return c;
          })
          this.setState({counters})
      }
   
    render() { 
        return (
            <div>
                <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
                <Counters 
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                />
            </div>
          );
    }
}
 
export default CounterApp;