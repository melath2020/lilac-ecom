import React from "react";
import Container from "../components/Container";
import bannr from "../../src/images/Rectangle 9.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-3">
        <div className="row">
          <div className="col-12">
            <div className="main-banner position-relative ">
              <img
                src={bannr}
                className="img-fluid rounded-3 main-banner"
                alt="main banner"
              />
            </div>
          </div>
          <div className="main-banner-content position-absolute text-white">
            <p>
              From students to senior citizens <br />
              this web portal of <br />
              <b>"Products and Classifieds” </b>
              <br />
              provides it all
            </p>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-3">
        <div className="row">
         <div className="head-deal d-flex">
          <h6 >Best Deals</h6>
          <h6 >View More</h6>
         </div>
         
        </div>
      </Container>
    </>
  );
};

export default Home;
