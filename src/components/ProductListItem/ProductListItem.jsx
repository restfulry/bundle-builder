import React from 'react';
import {Link} from 'react-router-dom';

function ProductListItem({product, handleDeleteProduct}) {
  return (
    <div className='panel'>
      Products Index
      <div className="panel-heading">
        <h3 className="panel-title">{product.productName}PRODUCT A</h3>
      </div>
      <div className="panel-footer">
        <Link className='btn' to={{pathname:'/details', state: {product}}}>Details</Link>
        <Link className='btn' to={{pathname:'/edit', state: {product}}}>Edit</Link>
        <button className="btn" onClick={() => handleDeleteProduct(product._id)}>DELETE</button>
      </div>
    </div>
  );
}

export default ProductListItem;