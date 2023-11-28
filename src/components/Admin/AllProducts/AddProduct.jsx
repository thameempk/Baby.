import React, { useContext, useState } from 'react'
import { MyContext2 } from '../../../App'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import AdminLogin from '../AdminLogin'
function AddProduct({isAdminLoged}) {
    const {item, setItems}  = useContext(MyContext2)
    const [prdId , setPrdId] = useState(10)
    const [productdet, setProductDel] = useState({
        id: prdId,
    name: '',
    category: '',
    desc: '',
    price: '',
    offer: '',
    delevery: '',
    offerper: '',
    qty: '',
    image: '',
    })
    const navigate = useNavigate()
    const handleImage = (e)=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductDel({...productdet,  image : reader.result});
              };
              reader.readAsDataURL(file);
        }
    }

    const handleSubmit = () =>{
        setPrdId((pre) => pre + 1)
        setItems([...item, {...productdet, id:prdId}])
    }
  return (
    <>
    <Button className='mt-3' onClick={()=>navigate('/admin/allproducts')}>Back</Button>
    {
        isAdminLoged ? (
            <div>
                
        
        <div className='register login container-fluid shadow-lg'>
            <h1>Add Products</h1>
        <label htmlFor="name">Product Name:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, name:e.target.value})} />
        </label>
        <label htmlFor="category">category:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, category:e.target.value})} />
        </label>
        <label htmlFor="desc">desc:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, desc:e.target.value})} />
        </label>
        <label htmlFor="price">price:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, price:e.target.value})} />
        </label>
        <label htmlFor="offer">offer:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, offer:e.target.value})} />
        </label>
        <label htmlFor="delevery">delevery:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, delevery:e.target.value})} />
        </label>
        <label htmlFor="offerper">offerper:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, offerper:e.target.value})} />
        </label>
        <label htmlFor="qty">qty:<br />
        <input type="text" onChange={(e)=>setProductDel({...productdet, qty:e.target.value})} />
        </label>
        <label htmlFor="image">Product Image:<br />
        <input type="file" onChange={handleImage} />
        </label>
        <Button variant='success' onClick={handleSubmit}>Add Product</Button>
        </div>
        
    </div>
         ) : (
            <div className='mb-3'>
                <p>admin is not loged</p>
                <Link to={'/admin/login'}>Please Login</Link>
            </div>
         )
    }
    </>
  )
}

export default AddProduct
