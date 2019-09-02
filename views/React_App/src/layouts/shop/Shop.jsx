import React from 'react';

function Shop({ products }) {
  return (
    <main>
      <div className="grid">
        <article className="card product-item">
          <header className="card__header">
            <h1 className="product__title">product.title</h1>
          </header>
          {console.log(products)}
          <div className="card__image">
            {/* <img src={product.imageUrl} alt={product.title} /> */}
          </div>
          <div className="card__content">
            {/* <h2 className="product__price">$ {product.price}</h2>
            <p className="product__description">{product.description}</p> */}
          </div>
          <div className="card__actions">
            <a href="/products" className="btn">Details</a>
          </div>
        </article>
      </div>
      <h1>No Products Found!</h1>
    </main>
  );
}

export default Shop;