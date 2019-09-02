import React from 'react';

function Cart({ products }) {
  return (
    <main>
      <ul className="cart__item-list">
        <li className="cart__item">
          <h1>title</h1>
          <h2>Quantity:</h2>
          <form action="/cart-delete-item" method="POST">
            <input type="hidden" value="<%= p.id %>" name="productId" />
            <button className="btn danger" type="submit">Delete</button>
          </form>
        </li>
      </ul>
      <hr />
      <div className="centered">
        <form action="/create-order" method="POST">
          <button type="submit" className="btn">Order Now!</button>
        </form>
      </div>
      <h1>No Products in Cart!</h1>
    </main>
  );
}

export default Cart;