import React, { useContext } from 'react'
import { MyContext3 } from '../../../App'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './Products.css'
function Products() {
    const {addCart,prd} = useContext(MyContext3)
    
  return (
    <>

    
      <h1 className='prd-head'>{prd.slice(0,1).map((item)=> item.category)}</h1>

      <div className='container mt-5'>
        <div className='row'>

          {

            prd.slice(-5).map((item) => (
              <div className='col-md-3 col-6 mt-2' key={item.id}>
                <CardGroup>
                  <Card style={{ width: "12rem", height: "26rem" ,alignItems:"center"}} className='shadow d-flex'>
                    <Link style={{ textDecoration: "none", color: "black" }} to={`/${item.id}`}>
                      <Card.Img variant="top" src={item.image} className='img-fluid mt-2' style={{ height: "10rem", width: "10rem" }} />
                      <Card.Body>
                        <Card.Text style={{ fontWeight: "600" }}>Name:{item.name}</Card.Text>
                        <Card.Text style={{ fontWeight: "600" }}>
                          <span style={{textDecoration:"line-through"}}> ₹{item.price}</span>  {item.offer}
                        </Card.Text>
                        <Card.Text style={{ fontWeight: "600", color:"green" }}>
                          {item.offerper}% off
                        </Card.Text>
                      </Card.Body>
                    </Link>
                    <Button variant="outline-info" onClick={() => addCart(item.id, 1)}>Add to cart</Button>
                  </Card>

                </CardGroup>

              </div>
            ))

          }
        </div>
        </div>
    
    </>
  )
}

export default Products