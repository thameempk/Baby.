import React, { useContext, useState } from 'react'
import "./Header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { MyContext, MyContext1 } from '../../../App';
import { FaShoppingCart } from "react-icons/fa";
import { MyContext2 } from '../../../App';
function Header({logout, setSearch, handleSearch}) {
  const {item} = useContext(MyContext2)
   const user = useContext(MyContext)
   const {login} = useContext(MyContext1)
  return (
    <>
        {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-head" >
          <Container fluid>
            <Navbar.Brand href=""><Link className='header-title' to={'/'}>Baby. </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="off"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                Baby. 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3 nav-temp">
                  <Nav.Link href="" style={{color:"black"}}><Link className='linkmain' to={'/'} s>Home</Link></Nav.Link>
                  <Nav.Link href=""><Link className='linkmain' to={'/shop'}>Shop</Link></Nav.Link>
                  
                  {user ? `Hai,${login.name}` : <Nav.Link href=""><Link className='linkmain' to={'/signin'}>Login</Link></Nav.Link>}
                 {
                    user ?  <Button variant="outline-success" onClick={logout}>Logout</Button> : ""
                 }
                 <Nav.Link href=""><Link className='linkmain' to={'/cart'}><FaShoppingCart /></Link></Nav.Link>
                 <Nav.Link href=""><Link className='linkmain' to={'/admin'}>Admin</Link></Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setSearch(e.target.value)}
                  />
                  <Button onClick={handleSearch} variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header