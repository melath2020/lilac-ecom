import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from '../features/user/userSlice';
import prdct from "../../src/images/placeholder.png";

const Cart = () => {
  const dispatch = useDispatch();
  const [totalAmount,setTotalAmount]=useState(null)
  const userCartState = useSelector((state) => state.auth.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(()=>{
    let sum =0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum=sum+(Number(userCartState[index]?.quantity)*userCartState[index]?.price)
      setTotalAmount(sum)
      
    }
  },[userCartState])

  return (
    <>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>

            {
              userCartState && userCartState?.map((item,index)=>{
                return(
                    <>
                    <div key={index} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
               <div className="cart-col-1 gap-15 d-flex align-items-center">
                 <div className="w-25">
                   <img src={prdct} className="img-fluid" alt="product image" />
                 </div>
                 <div className="w-75">
                   <p>{item?.productId?.title}</p>
                  
                   
                 </div>
               </div>
               <div className="cart-col-2">
                 <h5 className="price">$ {item?.price}</h5>
               </div>
               <div className="cart-col-3 d-flex align-items-center gap-15">
                 <div>
                   <input
                     className="form-control"
                     type="number"
                     name=""
                     min={1}
                     max={10}
                     id=""
                     value={item?.quantity}
                     
                   />
                 </div>
                 <div>
                   <AiFillDelete className="text-danger " />
                 </div>
               </div>
               <div className="cart-col-4">
                 <h5 className="price">$  {item?.price * item?.quantity}</h5>
               </div>
             </div>
                   </>
                )
              })}

           
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>

              {
             ( totalAmount !==null || totalAmount !==0) && <>
               <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {totalAmount}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
             </>
            }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
