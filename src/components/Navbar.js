import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:65}}>
        <div className="container d-flex justify-content-between">
          <div>
            <a className="navbar-brand fs-4" href="/">
              FakeShop
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <a className="nav-link mx-2" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="/product">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-outline-light mx-2">
              Login
            </button>
            <button type="button" className="btn btn-outline-light mx-2">
              Register
            </button>
            <button type="button" className="btn btn-outline-light mx-2">
              Cart (0)
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
