import React from 'react'
import HomeUsers from './homeUsers'
import {
    BrowserRouter as Router,
    Switch,
    Route
   
  } from "react-router-dom";
import Navbar from './navbar';
import AddUser from './addUser';
import EditUser from './editUser';
import ViewUser from './viewUser';
const CrudApp = () => {
    return (
        <Router>
        <div>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={HomeUsers}/>
            <Route exact path='/users/add' component={AddUser} />
            <Route exact path='/user/edit/:id' component={EditUser}/>
            <Route exact path='/user/view/:id' component={ViewUser}/>
        </Switch>
      
            
        </div>
        </Router>
    )
}

export default CrudApp
