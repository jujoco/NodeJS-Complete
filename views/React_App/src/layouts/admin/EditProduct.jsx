import React from 'react';

function EditProduct() {
  return (
    <main>
      <form className="product-form" action="/admin/edit-product" method="POST">
        <div className="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" value="" />
        </div>
        <div className="form-control">
          <label for="imageUrl">Image URL</label>
          <input type="text" name="imageUrl" id="imageUrl" value="" />
        </div>
        <div className="form-control">
          <label for="price">Price</label>
          <input type="number" name="price" id="price" step="0.01" value="" />
        </div>
        <div className="form-control">
          <label for="description">Description</label>
          <textarea name="description" id="description" rows="5"></textarea>Editing
        </div>

        <input type="hidden" value="id" name="productId" />

        <button className="btn" type="submit">Editing</button>
      </form>
    </main>
  );
}

export default EditProduct;