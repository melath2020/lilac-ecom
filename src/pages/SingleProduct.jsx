import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  getAProduct, getAllProducts } from '../features/product/productSlice';
import { toast } from 'react-toastify';
import prdct from "../../src/images/placeholder.png";
import { addProdToCart } from '../features/user/userSlice';



const SingleProduct = () => {
    const [quantity,setQuantity]=useState(1)
    const location=useLocation()
    const naviate=useNavigate()
    const getProductId=location.pathname.split("/")[2]
    const dispatch=useDispatch()
    const productState=useSelector(state=>state.product?.singleproduct)

    useEffect(()=>{
        dispatch(getAProduct(getProductId)) 
    },[])

    const uploadCart=()=>{
       
        if(quantity===null){
            toast.error("Please Choose Quantity")
            return false
        }else{
            dispatch(addProdToCart({productId:productState?._id,quantity,price:productState?.price}))
            naviate('/cart')
            
        }
    }
   
    
   
   
 

   

  
    const props = { width: 400, height: 500, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
  


 
   

    return (
        <>
    

            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                     
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'>
                                  {productState?.title}
                                </h3>

                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">
                                    $  {productState?.price}
                                </p>
                               
                            </div>
                            <div className=" py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Description :
                                    </h3><p className='product-data'>{productState?.description}</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Brand :
                                    </h3><p className='product-data'> {productState?.brand}</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Category :
                                    </h3><p className='product-data'>{productState?.category}</p>

                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                    <ReactStars
                edit={false}
                count={5}
                value={4}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#3187ED"
              />
                                    </h3><p className='product-data'> {productState?.tags}</p>

                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className="product-heading">
                                        Availiability :
                                    </h3><p className='product-data'>In Stock</p>

                                </div>

                                
                               

                                <div className='d-flex align-items-center gap-15 flex-row  mb-3 mt-2'>
                                  
                                        <h3 className="product-heading">
                                        Quantity :</h3>
                                    <div className=''>
                                        <input type="number" name="" min={1} max={10} step={{ width: "70px" }} className="form-control" id="" 
                                        onChange={(e)=>{setQuantity(e.target.value)}} value={quantity} />
                                    </div>
                                    

                                    

                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=""><AiOutlineHeart className='fs-5 me-2' /> Add to compare</a>
                                    </div>
                                    <div>
                                        <a href=""><TbGitCompare className='fs-5 me-2' /> Add to wishlist</a>
                                    </div>
                                </div>

                                <div className='d-flex gap-10 flex-column  my-3'>
                                    <h3 className="product-heading">
                                        Shipping & Returns
                                    </h3><p className="product-data">
                                        Free shipping and returns available on all orders! <br /> We
                                        ship all US domestic orders within
                                        <b> 5-10 business days!</b>
                                    </p>

                                </div>

                               
                                <div className="ms-5d-flex align-items-center gap-30 ms-5">
                                        
                                         <button className='button signup ' onClick={uploadCart}>Add to Cart</button>
                                     </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container> 


          

            


        </>
    )
}

export default SingleProduct