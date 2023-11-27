import React, { useContext } from 'react'
import { MyContext2, MyContext3 } from '../../../App'
import { Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'
function Products() {
    const {item} = useContext(MyContext2)
    const {addCart,prd} = useContext(MyContext3)
    
  return (
    <>

    
      <h1 className='prd-head'>{prd.slice(0,1).map((item)=> item.category)}</h1>

    <div>
    {
            prd.map((item)=>(
              <div className='d-inline-flex'>
              <Container >
        <Row>
            <Col  className="  card-up shadow"> 
            <Link to={`/${item.id}`} key={item.id}> 
                <img src={item.image} alt={item.name} className="img-fluid" />
                </Link>
                <br />
                <span className="item-name" style={{fontSize:"12px"}}>{item.name}</span>
                <br />
                <span className="item-price" style={{textDecoration:"line-through" , opacity:".6px"}}>₹{item.price}</span> <span className="item-price">₹{item.offer}</span> <span style={{color: "green", fontSize: "14px"}}>40% off</span>
                <br />
                <span className="delivery">free delivery</span>
                <br />
                <Button className='mb-2' variant="outline-info" onClick={()=>addCart(item.id, 1)} >Add to cart</Button>
            </Col>
          
            </Row>
        </Container>
        </div>
                
            ))
        }
    </div>
    
    </>
  )
}

export default Products