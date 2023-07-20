import React from 'react'
import cardvector from "../../src/images/placeholder (4).png";
import {ImLocation} from "react-icons/im";

const ClsfdsProduct = () => {
  return (
    <>
    <div className="card-prdct">
                <img src={cardvector} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text-p">
                  Holy Stone HS470 Foldable GPS RC Drone
                  </p>
                  <div className="rate-location d-flex">
                    <h3 className="rate">$300.98</h3>
                    <p className="location"><ImLocation/>Cape Headstone</p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default ClsfdsProduct