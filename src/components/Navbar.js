import React from "react";
import {
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
  const cartZero =()=>{
    return(
      <Link to='/cart' className="btn btn-outline-light mx-2" role="button">
            <i className="fas fa-shopping-cart mx-1"></i>
              Cart
      </Link>
    )
  }
  const cartFull =()=>{
    return(
      <Link to='/cart' className="btn btn-outline-light mx-2" role="button">
            <i className="fas fa-shopping-cart mx-1"></i>
              Cart ({state.length})
      </Link>
    )
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark h-65 ">
        <div className="container d-flex justify-content-between">
          <div>
            <Link className="navbar-brand fs-4" to="/">
              FakeShop
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 mx-3">
                <li className="nav-item">
                  <Link className="nav-link mx-2" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-outline-light mx-2">
            <i className="fas fa-sign-in-alt mx-1"></i>
              Login
            </button>
            <button type="button" className="btn btn-outline-light mx-2">
            <i className="fas fa-user-plus mx-1"></i>
              Register
            </button>
            {state.length ===0 ? cartZero() : cartFull()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
