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
      <div className="header-text">
        <p className="slogan">
          Taking a International Holidy? Make it Worry Free with
        </p>
        <h1 className="title">BK TOUR & TRAVELS</h1>
        <h3
          style={{
            backgroundColor: "rgb(50, 68, 85)",
            width: "60%",
            margin: "0 auto",
          }}
          className="package"
        >
          <span style={{ boxShadow: "0px 22px 20px -4px rgba(0,0,0,0.28)" }}>
            Packages Total: 1200 $
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
