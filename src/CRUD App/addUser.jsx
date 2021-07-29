import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const AddUser = () => {
    let history=useHistory();
    const [user,setUser]=useState({
        name:'',
        username:'',
        email:'',
        phone:''

    })
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,[name]:value
        });
        
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3003/users',user);
        history.push('/')
        console.log("data Successfully send");

    }
    console.log(user)
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={user.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    )
}

export default AddUser
