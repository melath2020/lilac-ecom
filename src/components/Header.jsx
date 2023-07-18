import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosCall, IoMdArrowDropdown } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="header-top-strip pt-2">
        <div className="container">
          <div className="row text-white main-row">
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <p>
                    <IoIosCall />
                    +221 33 66 22
                  </p>
                </div>
                <div className="col-4">
                  <p>
                    <MdEmail /> support@elextra.io
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="row text-end">
                <div className="col-7 ">
                  <p>
                    <MdLocationOn />
                    &nbsp;  Locations
                  </p>
                </div>
                <div className="col-3">
                  <p className="text-end">$ &nbsp; Dollar (US)</p>
                </div>
                <div className="col-2">
                  <p>
                    En&nbsp; 
                    <IoMdArrowDropdown />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper">
        <div className="container">
          <div className="row">
            
          </div>
        </div>
      </header>


    </>
  );
};

export default Header;
