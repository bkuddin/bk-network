import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">BK TOURS & TRAVEL</div>
        <nav>
          <a href="/group-torus">Group Tours</a>
          <a href="/deals">Deals</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className="header-text ">
        <p className="slogan">
          Taking a International Holidy? Make it Worry Free with
        </p>
        <h1 className="title">BK TOUR & TRAVELS</h1>
        <h3 className="package">Packages Total: 1200 $</h3>
      </div>
    </div>
  );
};

export default Header;
