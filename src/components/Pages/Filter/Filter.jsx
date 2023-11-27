import React, { useContext, useState } from 'react'
import { MyContext2 } from '../../../App'
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import './Filter.css'
import { useParams } from 'react-router-dom'
import { MyContext3 } from '../../../App';
function Filter({cartPlus, cartMin}) {
    const { addCart, placeOrder} = useContext(MyContext3)
    const {item} = useContext(MyContext2)
    const { category } = useParams()
    const [seemore, setSee ] = useState(false)
    const seeFun = () =>{
        if(seemore === true){
            setSee(false)
        }else{
            setSee(true)
        }
    }
    const Products = item.find((item)=> item.id === parseInt(category))
    return (
        <>

            {
                <div className='container ind shadow' style={{backgroundColor:"white"}}>
                    <div className='child1 col-sm-12'>
                    <img src={Products?.image} alt="" className='img-fluid'/>
                    <Button className='mt-2' variant='secondary' onClick={()=>cartPlus(Products.id)}>+</Button>< span className='mt-2' style={{fontWeight:"600", fontSize:"20px"}}>{Products.qty}</span><Button className='mt-2' variant='secondary' onClick={()=>cartMin(Products.id)}>-</Button>
                    <br />
                    <Button variant="warning" size="lg" className='m-3'  onClick={()=>addCart(Products.id, Products.qty)}><FaShoppingCart /> Add to cart</Button> 
                    <Button variant="danger" size="lg" onClick={()=>placeOrder(Products?.id)}>Buy now</Button>
                    </div>
                    <div className='child2 col-sm-12'>
                    <p className='p1'>{Products?.name}</p>
                <span className='p2'>₹{Products?.offer}</span> <span style={{color: "green", fontSize: "14px", float:"left" , marginLeft:"10px"}}>{Products?.offerper}% off</span>
                <br />
                <br />
                { seemore ? <p className='p3'>{Products.desc}</p> : <p className='p3'>{Products.desc.slice(0,200)}</p>}<span style={{color:"blue",}} onClick={seeFun}>see more...</span>
                
                </div>
                </div>
                
            }

        </>
    )
}

export default Filter