import React, { useState } from "react";
import {
  faBars,
  
  faShoppingCart,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [toggleNav, setToggelNav] = useState(false);
const [countCartItem/*, setCountCartItem*/] = useState(0);
  function handleToggle(e) {
    e.preventDefault();
    setToggelNav(!toggleNav);
  }
  return (
    <div>
      <header>
        <div className="container-nav">
          <nav className={` ${toggleNav ? "active" : ""}`}>
            <div className="menu-icon">
              <FontAwesomeIcon
                icon={faBars}
                className="menu-icon-bar"
                onClick={(e) => handleToggle(e)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="menu-icon-close"
                onClick={(e) => handleToggle(e)}
              />
            </div>
            {/* <a href="/" className="store-logo">
             
              <FontAwesomeIcon
                icon={faShoppingBag}
                className="store-logo-icon"
              />
            </a> */}

            <ul className="navigation-list">
              {/* <li>
                <a href="/" className="store-logo">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="store-logo-icon"
                  />
                </a>
              </li> */}
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">
                  Products
                  <i className="icon ">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </a>
                <ul className="products-cat">
                  <li>
                    <a href="/">Men</a>
                  </li>
                  <li>
                    <a href="/">Woman</a>
                  </li>
                  <li>
                    <a href="/">Kids</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Collections</a>
              </li>
              <li>
                <a href="/">My Account</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
             
              <li className="nav-shopping-cart">
                <a href="/cart" className="cart position-relative d-inline-flex">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="store-cart-icon"
                  />
                  <span className="cart-basket d-flex align-items-center justify-content-center ">{countCartItem} </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}