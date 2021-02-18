import React from 'react';
import {Link} from 'react-router-dom';

function ProductListItem({product, handleDeleteProduct, handleUpdateProduct, user}) {
  return (
    <div className='panel'>
      <div className="panel-heading">
      <h3 className="panel-title">
        <Link className='btn' to={{pathname:'/admin/product/details', state: {product}}}>
          {product.productName}
        </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp; ${product.price}
      </h3>
      </div>
      {user ?
      <div className="panel-footer">
        <Link className='btn' to={{pathname:'/admin/product/edit', state: {product, handleUpdateProduct}}}>Edit</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button className="btn" onClick={() => handleDeleteProduct(product._id)}>DELETE</button>
      </div>
      : <div></div>}
    </div>
  );
}

export default ProductListItem;