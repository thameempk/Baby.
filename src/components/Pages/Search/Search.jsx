import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MyContext3 } from '../../../App';
function Search({searchResult}) {
  const {addCart} = useContext(MyContext3)
  return (
    <div>
        {
            searchResult.map((item)=>(
              <div className='d-inline-flex main-item'>
              <Container >
        <Row>
            <Col  className="card-up shadow">
            <Link to={`/${item.id}`} key={item.id}> 
                <img src={item.image} alt={item.name} className="img-fluid" />
                </Link>
                <br />
                <span className="item-name" style={{fontSize:"12px"}}>{item.name}</span>
                <br />
                <span className="item-price" style={{textDecoration:"line-through" , opacity:".6px"}}>₹{item.price}</span> <span className="item-price">₹{item.offer}</span> <span style={{color: "green", fontSize: "14px"}}>{item.offerper}% off</span>
                <br />
                <span className="delivery">{item.delevery}</span>
                
                <br />
                <Button className='mb-2' variant="outline-info" onClick={()=>addCart(item.id, 1)} >Add to cart</Button>
            </Col>
          
            </Row>
        </Container>
        </div>
            ))
        }
    </div>
  )
}

export default Search