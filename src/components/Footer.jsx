import React from "react";
import logo from "../images/logo-6 1.png";
import micro from "../images/Vector.png";
import app from "../images/appStore.png";
import google from "../images/googlePlay.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-4 footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="" srcset="" className="logo-main" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div className="col-md-2">
              <h6>QUICK LINKS</h6>
              <div className="menu">
                <p>Products</p>
                <p>Classifieds</p>
                <p>Contact us</p>
                <p> <Link to='/login'>Login</Link></p>
                <p> <Link to='/signup'>Sign up</Link></p>
              </div>
            </div>
            <div className="col-md-2">
              <h6>QUICK LINKS</h6>
              <div className="menu">
                <p>My Account</p>
                <p>Orders</p>
                <p>Tracking List</p>
                <p>Terms</p>
                <p>Privacy Policy</p>
                <p>Return Policy</p>
                <p>My Cart</p>
              </div>
            </div>
            <div className="col-md-2">
              <h6>VENDOR AREA</h6>
              <div className="menu">
                <p>Partner with us</p>
                <p>Trainings</p>
                <p>Procetures</p>
                <p>Terms</p>
                <p>Privacy and Policy</p>
              </div>
            </div>
            <div className="col-md-3">
             
                <h6>Contact</h6>
                <div className="contact-txt">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                  <div className="row">
                    <div className="col-3 micro">
                      <img src={micro} alt="" srcset="" />
                    </div>
                    <div className="col-6 txt-num">
                      <b>Have any question?</b>
                      <p>+ 123 456 789</p>
                    </div>
                    <div className="col-3">
                      <button type="button" class="btn btn-light">
                        Chat
                      </button>
                    </div>
                  </div>
                  <div className="row app-dwld">
                <div className="col-6">
                  <img src={app} alt="" />
                </div>
                <div className="col-6">
                  <img src={google} alt="" />
                </div>
              </div>
                </div>
                
              
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
