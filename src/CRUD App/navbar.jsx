import React from 'react'
import { NavLink,Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
            <div className="container">
        <Link className="navbar-brand" to="/">
          Recat CRUD
        </Link>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Users
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </div>

            </nav>
        </div>
    )
}

export default Navbar
