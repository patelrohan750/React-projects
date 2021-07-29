import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import FramerExampleApp from './FramerExampleApp'
const FramerExampleIndex = () => {
    return (
        <div>
        <Router>
        <FramerExampleApp/>
        </Router>
            
        </div>
    )
}

export default FramerExampleIndex
