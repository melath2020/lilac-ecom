import React from "react";
import Container from "../components/Container";
import bannr from "../../src/images/Rectangle 9.png";
import ProductCard from "../components/ProductCard";
import emailvector from "../../src/images/Vector (1).png";
import dotvector from "../../src/images/circleElement.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ClsfdsProduct from "../components/ClsfdsProduct";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
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
            <h6>Best Deals</h6>
            <h6 className="view-txt">View More</h6>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex ">
              <ProductCard />
            </div>
            <div className="col-md-3 d-flex">
              <ProductCard />
            </div>
            <div className="col-md-3 d-flex">
              <ProductCard />
            </div>
            <div className="col-md-3 d-flex">
              <ProductCard />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3 d-flex ">
              <ProductCard />
            </div>
            <div className="col-md-3 d-flex">
              <ProductCard />
            </div>
            <div className="col-md-3 d-flex">
              <ProductCard />
            </div>
            <div className="col-md-3 d-flex">
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-3 py-3">
        <div className="row email-box">
          <div className="col-md-2">
            <img src={emailvector} alt="" srcset="" />
          </div>
          <div className="col-md-5">
            <h4 className="text-white sign-up-txt">
              Sign Up for Newsletter{" "}
              <img src={dotvector} alt="" srcset="" className="dot-vector" />
            </h4>
            <p className="mt-2 signup-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-5">
            <div className="input-group mb-3 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Email Here..."
                aria-label="Enter your Email Here..."
                aria-describedby="basic-addon2"
              />
              <button
                type="button"
                class="btn btn-secondary btn-subscribe py-2"
              >
                Subscribe
              </button>
            </div>
            <img
              src={dotvector}
              alt=""
              srcset=""
              className="dot-vector-2 text-end"
            />
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-4 py-3 back-clr">
        <div className="row ">
          <div className="col-md-3">
            <div className="prdct-selling-text">
              <span>
                <b>
                  Classified <br />
                  Products on
                  <br /> the week
                </b>
              </span>
            </div>

            <div className="arrows  ">
              <div className="arw-icon d-flex">
                <div className="arrow-left text-center">
                  <BsFillArrowLeftCircleFill className="p-1"/>
                </div>
                <div className="arrow-right text-center ">
                  <BsFillArrowRightCircleFill className="p-1"/>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="button" class=" btn-classifieds text-white mt-2">
                Explore <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <ClsfdsProduct />
          </div>
          <div className="col-md-3">
            <ClsfdsProduct />
          </div>
          <div className="col-md-3">
            <ClsfdsProduct />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
