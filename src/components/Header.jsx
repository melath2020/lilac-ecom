import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosCall, IoMdArrowDropdown } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GiBasket } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import logo from "../images/logo-6 1.png";
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
                    &nbsp; Locations
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
            <div className="col-2">
              <Link to='/'><img src={logo} alt="" srcset="" className="logo-main" /></Link>
              
            </div>
            <div className="col-2">
              <div className="dropdown mt-4">
                <button
                  className="btn btn-clsfds-drpdwn dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Classifieds &nbsp;
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="input-group mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <BiSearchAlt2 className="search-icon" />
                </span>
              </div>
            </div>
            <div className="col-2 mt-4 text-end ">
              <AiOutlineHeart className="ms-3 text-dark-emphasis" />
              <GiBasket className="ms-3 text-dark-emphasis" />
              <Link to='profile'><CgProfile className="ms-3 text-dark-emphasis" /></Link>
            </div>
            <div className="col-2 mt-2 p-2 text-end">
              <button type="button" class=" btn-classifieds text-white ">
                Classifieds
              </button>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom ">
        <div className="container">
          <div className="row">
            <div className="col-12 menu-text">
              <div class="d-flex flex-row mb-3">
                <div class="p-2">All Categories </div>
                <div class="p-2 ms-3">Books</div>
                <div class="p-2">Electronics</div>
                <div class="p-2">Real estate</div>
                <div class="p-2">Cars-bikes</div>
                <div class="p-2">Dorm-furniture</div>
                <div class="p-2">Men</div>
                <div class="p-2">Women</div>
                <div class="p-2">Music</div>
                <div class="p-2">Toys</div>
                <div class="p-2">Kids</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
