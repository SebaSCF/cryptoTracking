import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid navBar">
      <div className="bContainer d-flex flex-row justify-content-center align-content-center">
        <div className="navbrand p-4">
          <NavLink className="visited-none " to="/">
            <i className="fas fa-american-sign-language-interpreting"></i>
          </NavLink>
        </div>
        <div className="btnsContainer d-flex align-items-end">
          <NavLink className="visited-none " to="/">
            <div className="btn-item p-4">
              <i className="fa fa-home"></i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//Another btn if needed
/*  <div className="btn-item p-4">
            <i className="fas fa-money-bill"></i>
          </div> */
