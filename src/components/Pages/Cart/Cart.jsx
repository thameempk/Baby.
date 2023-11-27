import React, { useContext } from 'react'
import { MyContext3 } from '../../../App'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "./Cart.css"
import { IoCloseCircleOutline } from "react-icons/io5";
import Signin from '../User/Signin';
import { useNavigate } from 'react-router-dom';
function Cart({cartSecPlus,cartSecMin, total, empty, delCart, isLoged, log}) {
    const {cart, placeOrder} = useContext(MyContext3)
    const navigate = useNavigate()
return ( 
    <>
    <Button className='m-3' variant='warning' onClick={()=>navigate('/orderstatus')}>Order Status</Button>
      {
  isLoged ? (
    empty ? (
      <>
        <h1 className='cart-title'>Cart</h1>
        <div className='container cart-table' style={{ marginTop: '50px' }}>
          <div className='cart-tab shadow'>
            <Table striped className='shadow'>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id}>
                    <td><img className='cart-image' src={item.image} alt='' /></td>
                    <td className='td-pad'>
                      {item.name}
                    </td>
                    <td className='td-pad'>
                      <span>₹{item.offer}</span>
                    </td>
                    <td className='td-pad'>
                      <span>
                        <Button variant='secondary' onClick={() => cartSecPlus(item.id)}>+</Button>
                        <span>{item.qty}</span> <Button variant='secondary' onClick={() => cartSecMin(item.id)}>-</Button>
                      </span>
                    </td>
                    <td className='td-pad'>
                      <span>₹{item.total}</span>
                    </td>
                    <td className='td-pad'>
                      <IoCloseCircleOutline style={{ fontSize: '20px' }} onClick={() => delCart(index)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="checkout cart-tab2 ">
            <Table striped className='shadow'>
              <thead>
                <tr>
                  <th className='td-pad'>Cart Totals</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td-pad'>Sub Total</td>
                  <td className='td-pad'>₹{total}</td>
                </tr>
                <tr>
                  <td className='td-pad'>Total</td>
                  <td className='td-pad'>₹{total}</td>
                </tr>
                <tr>
                  <td colSpan={2}><Button variant='danger' onClick={placeOrder}>PROCEED TO CHECKOUT</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </>
    ) : (
      <div>
        <h1>Cart is empty</h1>
      </div>
    )
  ) : <Signin log={log}/>
}
      
    </>
  );
}

export default Cart
