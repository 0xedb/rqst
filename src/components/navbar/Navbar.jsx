import { Link } from "gatsby";
import "./navbar.css";
import React from "react";

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
