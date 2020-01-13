import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

const LOGO = `rqst<-`;

const Navbar = ({ children }) => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">{LOGO}</Link>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
