import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">BK NETWORK</div>
        <nav>
          <a href="/foundation">Foundation</a>
          <a href="/deals">Deals</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className="header-text">
        <p className="slogan">The Benefits of Becoming a Member...</p>
        <h1 className="title">International Association</h1>
        <h3
          style={{
            backgroundColor: "rgb(50, 68, 85)",
            width: "70%",
            margin: "0 auto",
          }}
          className="budget"
        >
          <span style={{ boxShadow: "0px 22px 20px -4px rgba(0,0,0,0.28)" }}>
            Nonprofit Budget, Total: $ 150000
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
