import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Allproducts from './AllProducts/Allproducts';
import Users from './Users/Users';
import AdminLogin from './AdminLogin';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
function Admin({user, isAdminLoged , setIsAdminLoged, cat, deleteItem}) {
  return (
    <>
    {
      isAdminLoged ? (
        <div>
          
     <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Users">
        <Users user ={user} isAdminLoged={isAdminLoged}/>
      </Tab>
      <Tab eventKey="profile" title="Products">
        <Allproducts isAdminLoged={isAdminLoged} cat={cat} deleteItem={deleteItem}/>
      </Tab>
    </Tabs>
    <Button className='m-3' onClick={()=>setIsAdminLoged(false)}>Logout</Button>
    </div>
      ) :  (
        <div>
            <p>admin is not loged</p>
            <Link to={'/admin/login'}>Please Login</Link>
        </div>
     )
    }
    
    </>
  )
}

export default Admin