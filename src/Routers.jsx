import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
   
  } from "react-router-dom";

import Home from './Home page/Home';
import MultiStepFormApp from './MultiStepForm/MultiStepFormApp'
import CounterApp from './counter App/counterApp'
import MiniNetflixApp from './Mini Netflix App/miniNetflixApp';
import LifeCycleApp from './Life Cycle Methods/LifeCycleApp'
import MiniGoogleKeepApp from './Mini Google Keep App/miniGoogleKeepApp';
const Routers = () => {
    
    
    return (
      
        <Router>
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/counterapp">
            <CounterApp />
          </Route>
          <Route exact path="/netflixcloneapp">
            <MiniNetflixApp />
          </Route>
          <Route  exact path="/lifycycle">
            <LifeCycleApp />
          </Route>
          <Route exact path="/googlekeepclone">
            <MiniGoogleKeepApp />
          </Route>
          <Route exact path="/multistepform">
            <MultiStepFormApp />
          </Route>
        </Switch>
   
     

        </Router>
            
      
    )
}

export default Routers
