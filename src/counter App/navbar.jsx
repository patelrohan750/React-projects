import React,{Component} from 'react';
class Navbar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div class="container">
             <a class="navbar-brand" >Cart
             <span className="badge m-2 bg-secondary">{this.props.totalCounters}</span></a>
             </div>

            </nav>
         );
    }
}
 
export default Navbar;