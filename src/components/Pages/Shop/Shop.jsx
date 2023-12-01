import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { MyContext2 } from '../../../App';
import { MyContext3 } from '../../../App';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { FaFilter } from "react-icons/fa";
import "./Shop.css"
function Shop({cartPlus, cartMin, ViewItem, priceItem, cat}) {
  const { addCart} = useContext(MyContext3)
    const {item} = useContext(MyContext2)
    const [price, setPrice] = useState("")
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='div mb-3'>
        <h1 className='header-shop' style={{textShadow:"2px 2px black"}}>Shop</h1>
        <br />
        <span onClick={handleShow} style={{fontWeight:"600"}} className="filter-span"> <FaFilter  className='filter'/> Filter</span>
         <br />

      <Offcanvas classNam="offcan" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <input type="text" className='price-input' placeholder='enter your price range...' onChange={(e)=>setPrice(e.target.value)}/>
              <Button variant='info' className='m-2 price-btn' onClick={()=>priceItem(price)}>sort</Button>
        {
            cat.map((list)=>(
              <>
             <Button className='btn-filter' onClick={()=>ViewItem(list.name)}>{list.name}</Button>
              </>
            ))
          }
        
      </Offcanvas>
      <div className='container mt-5'>
        <div className='row'>

          {

            item.map((item) => (
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
    </div>
  )
}

export default Shop
