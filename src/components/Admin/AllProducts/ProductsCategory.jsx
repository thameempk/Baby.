import React, { useContext } from 'react'
import { MyContext2 } from '../../../App'
import { useNavigate, useParams } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
function ProductsCategory({deleteItem, isAdminLoged}) {
    const {item} = useContext(MyContext2)
    const {category} = useParams()
    const datas = item.filter((item)=> item.category === category)
    const navigate = useNavigate()
  return (
<>
    {
        isAdminLoged ? (
            <div className='container'>
                <Button className='m-3' onClick={()=>navigate('/admin')}>Back</Button>
            <div className='row'>
                <h1>{category}</h1>
                {
                    
                    datas.map((item, index)=>(
                        <div className='col-md-3 col-6 m-3' key={item.id}>
                          
                          <CardGroup>
                          <Card style={{width:"10rem", height:"24rem"}} className='shadow'>
      <Link style={{textDecoration:"none", color:"black"}} to={`/admin/allproducts/${item.id}`}>
        <Card.Img variant="top" src={item.image} className='img-fluid' style={{height:"10rem", width:"10rem"}}/>
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
        ) : (
            <div className='mb-3'>
                <p>admin is not loged</p>
                <Link to={'/admin/login'}>Please Login</Link>
            </div>
        )
    }
    </>
  )
}

export default ProductsCategory