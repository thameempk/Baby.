import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { MyContext } from '../../../App';
import Signin from '../User/Signin';
function OrderStatus({user, login , log}) {
    const isLoged = useContext(MyContext)
    const findUser = user.find((user)=> user.email === login.email)
  return (
    <div>
        {
            isLoged ? (
                <div className='container'>
            <div className='row'>
        <h1>Order Status</h1>
        

        {
             
            findUser?.order && (
                <div className='col-12 col-md-6'>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
     
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Order Date</th>
      <th>Expected Delevery:</th>
    </tr>
    </thead>
    <tbody>
                    {findUser?.order?.map((order)=> (
                        <tr>
                        <td><img style={{height:"10rem"}} src={order.image} alt={order.name} /> {order.name}</td>
                        <td>{order.total}</td>
                        <td>{order.qty}</td>
                        <td>{order.date}</td>
                        <td>{order.deliveryDate}</td>
                        </tr>
                    )
                    )
                    
                    }
</tbody>
</Table>  
                </div>
            )
          
        }
        
          </div>
          </div>
            ) : <Signin log={log} />
        }
        
    </div>
  )
}

export default OrderStatus