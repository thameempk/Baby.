import React, { useContext, useState } from 'react'
import { MyContext2 } from '../../../App'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
function ProductPage({isAdminLoged, setIsAdminLoged}) {
    const navigate = useNavigate()
    const {item, setItems} = useContext(MyContext2)
    const {productid} = useParams()
    const filterData = item.find((item)=> item.id === parseInt(productid))
    const [edit, setEdit] = useState(null)
    const [updatedItem, setUpdatedItem] = useState({ id: filterData?.id,
        name: filterData?.name,
        price: filterData?.price,
        category: filterData?.category,
        offer: filterData?.offer,
        desc: filterData?.desc,
        delevery: filterData?.delevery,
        offerper : filterData?.offerper,
        image: filterData?.image,}) 
    const handleUpdate = (id) =>{
        const newItem = item.map((item)=> item.id === id ? {...updatedItem, id:filterData?.id , qty :filterData?.id} : item)
        setItems(newItem)
        setEdit(null)
        navigate(`/admin/allproducts/${filterData?.id}`)
    }
    const handleImage = (e)=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedItem({...updatedItem,  image : reader.result});
              };
              reader.readAsDataURL(file);
        }
    }
    console.log(updatedItem);
  return (
    <>
    <Button className='mt-3' onClick={()=> navigate('/admin/allproducts')}>Back</Button>
    {
        isAdminLoged ? (
            
                filterData?.id === edit ? (
                    <div>
                         <div className='register login container-fluid shadow-lg mb-3'>
                            <h1>Update Product</h1>
                         <br />
                        <label htmlFor="name"> Product Name:<br />
                            <input type="text" value={updatedItem?.name} placeholder={filterData?.name} onChange={(e)=>setUpdatedItem({...updatedItem, name: e.target.value})}/>
                        </label><br />
                        <label htmlFor="price"> Price:<br />
                            <input type="text" value={updatedItem?.price} placeholder={filterData?.price} onChange={(e)=>setUpdatedItem({...updatedItem, price: e.target.value})}/>
                        </label><br />
                        <label htmlFor="category">Category:<br />
                            <input type="text" value={updatedItem?.category} placeholder={filterData?.category} onChange={(e)=>setUpdatedItem({...updatedItem, category: e.target.value})}/>
                        </label><br />
                        <label htmlFor="offer"> Offer:<br />
                            <input type="text" value={updatedItem?.offer} placeholder={filterData?.offer} onChange={(e)=>setUpdatedItem({...updatedItem, offer: e.target.value})}/>
                        </label><br />
                        <label htmlFor="desc"> Description:<br />
                            <textarea  rows={5} value={updatedItem?.desc} placeholder={filterData?.desc} onChange={(e)=>setUpdatedItem({...updatedItem, desc: e.target.value})}/>
                        </label><br />
                        <label htmlFor="off"> Delevery:<br />
                            <input type="text" value={updatedItem?.delevery} placeholder={filterData?.delevery} onChange={(e)=>setUpdatedItem({...updatedItem, delevery: e.target.value})}/>
                        </label><br />
                        <label htmlFor="off"> off:<br />
                            <input type="text" value={updatedItem?.offerper} placeholder={filterData?.offerper} onChange={(e)=>setUpdatedItem({...updatedItem, offerper: e.target.value})}/>
                        </label><br />
                        <label htmlFor="image">
                        Image: <br /> <input type="file" onChange={handleImage}/>
                        </label>
                        <Button className='mt-2' variant='success' onClick={()=>handleUpdate(filterData?.id)}>Update</Button>
                        </div>
                    </div>
                ) : (
                    <div className='container mt-5 mb-3'>
                <div className='row shadow' style={{backgroundColor:'white',padding:"10px"}}>
                    <div className='col-12 col-md-6'>
                        <img src={filterData?.image} style={{maxHeight:"20rem"}} alt="" />
                    </div>
                    <div className='col-12 col-md-6' >
                    <FaEdit style={{float:'right', fontSize:"20px"}} onClick={()=>setEdit(filterData?.id)}/>
                        <p><span style={{fontWeight:"600", fontSize:"20px"}}>Product Name:</span>{filterData?.name}</p>
                        <p><span style={{fontWeight:"600", fontSize:"20px"}}>Price:</span> {filterData?.price}</p>
                        <p><span style={{fontWeight:"600", fontSize:"20px"}}>Category:</span> {filterData?.category}</p>
                        <p><span style={{fontWeight:"600", fontSize:"20px"}}>Offer:</span> {filterData?.offer}</p>
                        <p><span style={{fontWeight:"600", fontSize:"20px"}}>Description:</span> {filterData?.desc.slice(0,200)}...</p>
                        <p><span style={{fontWeight:"600", fontSize:"20px"}}>Off:</span> {filterData?.offerper}</p>
                        <p><span style={{fontWeight:"600", fontSize:"20px"}}>Delevery:</span> {filterData?.delevery}</p>
                    </div>
                </div>
                </div>
                
                )
            
        ) :  (
            <div className='mb-3'>
                <p>admin is not loged</p>
                <Link to={'/admin/login'}>Please Login</Link>
            </div>
         )
    }
    
    
    </>
  )
}

export default ProductPage

