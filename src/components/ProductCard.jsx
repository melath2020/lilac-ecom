import React from 'react'
import prdct from "../../src/images/placeholder.png";
import ReactStars from "react-rating-stars-component";
const ProductCard = () => {
  return (
   <>
   
            <img src={prdct} className="img-fluid" alt="" srcset="" />
            <div className="content-prdct">
              <p>Fitness and <br/>activity Tracker</p>
              <div className="price"><b>$ 33.3</b></div>
              <ReactStars
                    edit={false}
                    count={5}
                    value={3}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#3187ED"
                />
            </div>
         
   </>
  )
}

export default ProductCard