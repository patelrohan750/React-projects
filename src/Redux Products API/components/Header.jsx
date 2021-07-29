import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand container">
            <Link  to='/'>
            Redux Products
            </Link>
               
            </div>
        </div>
    )
}

export default Header
