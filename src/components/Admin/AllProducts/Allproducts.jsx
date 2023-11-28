import React, { useContext } from 'react'
import { MyContext2 } from '../../../App'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Allproducts({isAdminLoged , cat, deleteItem }) {
    const {item} = useContext(MyContext2)
    const navigate = useNavigate()
  return (
    <>
    {
      isAdminLoged ? (
        <div className='container mt-5'>
          <Button className='m-2' onClick={()=>navigate('/admin')}>Back</Button>
        <Button variant='success' onClick={()=>navigate('/admin/allproducts/addproduct')}>Add new Products</Button>
        <Button className='m-2' onClick={()=>navigate('/admin/allproducts/addcategory')}>Add New Category</Button>
        <ButtonGroup className='m-2' vertical>
      <DropdownButton
        as={ButtonGroup}
        title="Category"
        id="bg-vertical-dropdown-3"
      >
        {
          cat.map((item)=>(
            <Dropdown.Item eventKey="1"><Link style={{textDecoration:"none", color:"black"}} to={`/admin/allproducts/category/${item.name}`}>{item.name}</Link></Dropdown.Item>
          ))
        }
       
      </DropdownButton>
      </ButtonGroup>
        <div className='row'>
            
                {
                    
                    item.map((item, index)=>(
                        <div className='col-md-3 col-6 mt-2' key={item.id}>
                          <CardGroup>
                          <Card style={{width:"12rem", height:"24rem"}} className='shadow'>
      <Link style={{textDecoration:"none", color:"black"}} to={`/admin/allproducts/${item.id}`}>
        <Card.Img variant="top" src={item.image} className='img-fluid mt-2' style={{height:"10rem", width:"10rem"}}/>
        <Card.Body>
          <Card.Text style={{fontWeight:"600"}}>Name:{item.name}</Card.Text>
          <Card.Text style={{fontWeight:"600"}}>
            Price:{item.price}
          </Card.Text>
        </Card.Body>
        </Link>
      
      
        <Card.Text><MdDelete style={{textAlign:"center", fontSize:"20px"}} onClick={()=>deleteItem(index)}/></Card.Text>
        </Card>
        </CardGroup>
    
    </div>
                    ))
                 
                }
             </div>  
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

export default Allproducts


      
