import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
const Navbar=() =>{
  const state=useSelector((state)=>state.handerCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-yellow py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            NHU Y NGUYEN
          </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark mx-1"><i className="fa fa-sign-in"></i> Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark mx-2"><i className="fa fa-user-plus"></i>Register</NavLink>
            <NavLink to="/cart" id="myButton "className="btn btn-outline-dark mx-1"><i className="fa fa-shopping-cart"></i> Cart({state.length})</NavLink>
           
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
