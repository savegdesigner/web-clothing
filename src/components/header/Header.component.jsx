import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo/logo-b.svg";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <Link className="option" to="/" onClick={() => auth.signOut()}>
          Sign Out
        </Link>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </header>
);

export default Header;
