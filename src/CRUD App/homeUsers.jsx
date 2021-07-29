import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const HomeUsers = () => {
   const [users,setUsers]=useState([]);
   useEffect(() => {
    loadUsers();
   }, [])
   const loadUsers=async()=>{
       const result=await axios.get('http://localhost:3003/users');
        console.log(result.data);
        setUsers(result.data)

   }
   const handlerDelete=async(id)=>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
   }
    return (
        <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link class="btn btn-primary me-2"
                     to={`/user/view/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary me-2"
                    to={`/user/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                    onClick={()=>handlerDelete(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default HomeUsers
