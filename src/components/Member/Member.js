import "./Member.css";

import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Cart from "../Cart/Cart";

const Member = () => {
  const [membersData, setmembersData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./association.json")
      .then((res) => res.json())
      .then((data) => setmembersData(data));
  }, []);

  const handleAddToCart = (member) => {
    const newCart = [...cart, member];
    setCart(newCart);
  };
  return (
    <div>
      <div className="member-container">
        <div className="members">
          {membersData.map((member) => (
            <Display
              member={member}
              handleAddToCart={handleAddToCart}
            ></Display>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Member;
