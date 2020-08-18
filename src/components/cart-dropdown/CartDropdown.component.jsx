import React from "react";

import CustomButton from "../custom-button/CustomButton.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>

    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default CartDropdown;
