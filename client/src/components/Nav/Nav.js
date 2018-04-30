import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          NTY Search
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
