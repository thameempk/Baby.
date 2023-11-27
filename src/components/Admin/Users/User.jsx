import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
function User({user, isAdminLoged , setIsAdminLoged , setUser}) {
  const navigate = useNavigate()
    const {userid} = useParams()
    const filterData = user.find((item)=> item.id === parseInt(userid))
    const dateUpdate = (product , date) =>{
      const updatedOrder = filterData?.order?.map((item) =>
    item.id === product ? { ...item, deliveryDate: date } : item
  );
      const userAdd = user.map((user)=> user.id === parseInt(userid) ? {...user, order : updatedOrder} : user)
      setUser(userAdd)
    }
  return (
    <>   
    {
      isAdminLoged ? (
        <div className='container mt-5'>
          <Button onClick={()=>navigate('/admin')}>Back</Button>
        <div className='row'>
              {
                filterData && (
                  
                  <div className='col-12 col-md-6'>
                    <h1>User Details</h1>
                  <Card style={{ width: '24rem' }}>
  <Card.Body>
    <Card.Title>Name: {filterData?.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">E-mail: {filterData?.email}</Card.Subtitle>
    <Card.Text>
      Phone: {filterData?.phone}
    </Card.Text>
  </Card.Body>
</Card>
            </div>
            
            
                )
              }
              {
                filterData.order && (
                  <div className='col-12 col-md-6'>
                    <h1>Order Details</h1>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
     
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Order Date</th>
      <th>order status</th>
    </tr>
    </thead>
    <tbody>
    
            {
              filterData?.order?.map((item)=>(
                <tr>
      <td><img className='img-fluid' style={{height:"7rem"}} src={item.image} alt="" /> {item.name}</td>
      <td>{item.offer}</td>
      <td>{item.qty}</td>
      <td>{item.date}</td>
      <td><label htmlFor="date">Delevery Expected:</label>
      <br /><input type="date" onChange={(e)=>dateUpdate(item.id, e.target.value)}/></td>
    </tr>
              ))
            }
            </tbody>
</Table>  
                </div>
                )
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

export default User