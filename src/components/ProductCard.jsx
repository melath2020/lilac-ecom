import React from 'react'
import prdct from "../../src/images/placeholder.png";
import ReactStars from "react-rating-stars-component";
const ProductCard = (props) => {
  const { data } = props;
  return (
   <>
   {data?.map((item, index) => {
    
        return (
          <div className="col-md-3 d-flex mt-2 "  key={index}>
          <div className="d-flex">
            <img
              src={prdct}
              className="img-fluid"
              alt=""
              srcset=""
              key={index}
            />
            <div className="content-prdct">
              <p>
                {item.title} <br />
                activity Tracker
              </p>
              <div className="price">
                <b>$ {item.price}</b>
              </div>
              <ReactStars
                edit={false}
                count={5}
                value={item?.ratings}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#3187ED"
              />
            </div>
          </div>
          </div>
        );
          })}
          
         
   </>
  )
}

export default ProductCard