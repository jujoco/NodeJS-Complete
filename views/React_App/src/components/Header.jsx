import React from 'react';
import { Link } from 'react-router-dom';

function Header({ path }) {
  return (
    <>
      <div className="backdrop"></div>
      <header className="main-header">
        <button id="side-menu-toggle">Menu</button>
        <nav className="main-header__nav">
          <ul className="main-header__item-list">
            <li className="main-header__item">
              <Link to="/">Shop</Link>
            </li>
            <li className="main-header__item">
              <Link to="/products">Product</Link>
            </li>
            <li className="main-header__item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="main-header__item">
              <Link to="/orders">Orders</Link>
            </li>
            <li className="main-header__item">
              <Link to="/admin/add-product">Add Product</Link>
            </li>
            <li className="main-header__item">
              <Link to="/admin/products">Admin Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;