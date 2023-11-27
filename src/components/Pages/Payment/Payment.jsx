import React, { useContext } from 'react'
import { MyContext3 } from '../../../App'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import "./Payment.css"
import Signin from '../User/Signin';

function Payment({total, cart, orderTotal, isLoged, log, orderPlace}) {
  const {order, ordersec} = useContext(MyContext3)
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  return (
    <>
    
    { isLoged ?(
      order ? (
        <div className='container pay-sec '>
      <div className='form-elem'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="mb-3" as={Col} md="6" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </Form>
    </div>
    <div className='order-det cart-tab'>
    <Table striped className='shadow'>
      <thead>
        <tr>
          <th className='td-pad'>Product</th>
          <th></th>
          <th>Sub Total</th>
        </tr>
      </thead>
      <tbody>
        {
          ordersec.map((item)=>(
            <>
            <tr>
            <td><img className='cart-image' src={item.image} alt='' /></td>
            <td className='td-pad'>{item.name}</td>
            <td className='td-pad'>{item.total}</td>  
        </tr>
       
        
        </>
          ))
        }
         <tr>
        <td className='td-pad'>Sub Total</td>
        <td></td>
          <td className='td-pad'>₹{orderTotal}</td>   
        </tr>
        <tr>
            <td className='td-pad'>Total</td>
            <td></td>
            <td className='td-pad'>₹{orderTotal}</td>
        </tr>
        <tr>
            <td colSpan={3}><Button onClick={()=>orderPlace(ordersec)} variant='danger'>Place Order</Button></td>
            
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
      ) : ""
    ) : <Signin log={log}/>
      
    }
    </>
  )
}

export default Payment