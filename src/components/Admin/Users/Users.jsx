import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import "./Users.css"
import AdminLogin from '../AdminLogin';
import { MdDelete } from "react-icons/md";
import { MyContext1 } from '../../../App';
function Users({ isAdminLoged  }) {
  const {login, user, setUser} = useContext(MyContext1)
  const deleteUser = (id) =>{
    const filterUser = user.filter((user)=> user.id !== id)
    setUser(filterUser);
  }
  return (
    <>
      {
        isAdminLoged ? (
          <div>
            <Table striped>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {user.map((user) => (

                  <tr key={user.id}>

                    <td>{user.id}</td>
                    <td className='link-tab'><Link style={{ textDecoration: "none", color: "black" }} to={`/admin/users/${user.id}`}>{user.name}  </Link></td>
                    <td>{user.email}</td>
                    <td><MdDelete onClick={()=>deleteUser(user.id)}/></td>
                  </tr>
                ))

                }

              </tbody>
            </Table>
          </div>
        ) : (
          <div>
            <p>admin is not loged</p>
            <Link to={'/admin/login'}>Please Login</Link>
          </div>
        )
      }
    </>
  )
}

export default Users