import React, { useContext } from 'react'
import { MyContext2 } from '../../../App'
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MyContext3 } from '../../../App';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
function Home({ cartMin, cartPlus }) {
  const nav = useNavigate()
  const { item } = useContext(MyContext2)
  const {  addCart } = useContext(MyContext3)
  const filetrItem = item.filter((item) => item.offer <= 500)
  return (
    <div className="home">
      <div>
        <Carousel fade className='shadow'>
          <Carousel.Item>
            <img src={require(`../../../images/baby-goods-light-blue.jpg`)} alt="" style={{ width: "100%", maxHeight: "100vh" }} />
            <Carousel.Caption>
              <Button variant='danger' onClick={() => nav('/shop')}>SHOP NOW</Button>
              <p style={{ fontSize: "40px", fontWeight: "600", fontFamily: "sans-serif", color: "orange" }}>40% off on all Products</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require(`../../../images/1540.jpg`)} alt="" className='mt-0' style={{ width: "100%", maxHeight: "100vh" }} />

            <Carousel.Caption>
              <Button variant='danger' onClick={() => nav('/shop')}>SHOP NOW</Button>
              <p style={{ fontSize: "40px", fontWeight: "600", fontFamily: "sans-serif", color: "orange" }}>40% off on all Products</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require(`../../../images/beauty-product-still-life.jpg`)} alt="" className='mt-0' style={{ width: "100%", maxHeight: "100vh" }} />

            <Carousel.Caption>
              <Button variant='danger' onClick={() => nav('/shop')}>SHOP NOW</Button>
              <p style={{ fontSize: "40px", fontWeight: "600", fontFamily: "sans-serif", color: "orange" }}>40% off on all Products</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h3 className='headings' style={{ marginTop: "20px", fontSize: "60px", fontWeight: "800", fontFamily: "cursive" }}>New Arrivals</h3>

      <div className='container mt-5'>
        <div className='row'>

          {

            item.slice(-5).map((item) => (
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
        <h3 className='headings' style={{ marginTop: "20px", fontSize: "60px", fontWeight: "800", fontFamily: "cursive" }}>Top Deals</h3>

        <div className='container mt-5'>
        <div className='row'>

          {

            filetrItem.map((item) => (
              <div className='col-md-3 col-6 mt-2' key={item.id}>
                <CardGroup>
                  <Card style={{ width: "12rem", height: "26rem" ,alignItems:"center"}} className='shadow d-flex'>
                    <Link style={{ textDecoration: "none", color: "black" }} to={`/${item.id}`}>
                      <Card.Img variant="top" src={item.image} className='img-fluid mt-2' style={{ height: "10rem", width: "10rem" }} />
                      <Card.Body>
                        <Card.Text style={{ fontWeight: "600" }}>{item.name}</Card.Text>
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

export default Home
