import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';
import { LuUser2 } from "react-icons/lu";
import { Button } from 'react-bootstrap';
function Register({handleSubmit}) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [con_pass, setCon_Pass] = useState("")
    const [phone, setPhone] = useState("")
  return (
    <>
    <div className='register login container-fluid shadow-lg'>
        <h1>Register</h1>
        <LuUser2 style={{fontSize:"100px"}}/> <br />
        <label htmlFor="name">Name:</label> <br />
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label htmlFor="email">Email:</label> <br />
        <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Password:</label> <br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <label htmlFor="con">Confirm Password:</label> <br />
        <input type="password" onChange={(e)=>setCon_Pass(e.target.value)}/>
        <br />
        <label htmlFor="phone">Phone:</label> <br />
        <input type="text" onChange={(e)=>setPhone(e.target.value)}/>
        <br />
        <br />
        <Button variant='success' onClick={()=>handleSubmit(name, email, password, con_pass, phone)}>Submit</Button>
        <br />
        <p style={{fontWeight:"600"}}>Existing user? <Link to={'/signin'}>login</Link></p>
        </div>
    </>
  )
}

export default Register