import React from 'react';
import {Link} from 'react-router-dom';

function ProductListItem({product, handleDeleteProduct}) {
  return (
    <div className='panel'>
      <div className="panel-heading">
        <Link className='btn' to={{pathname:'/product/details', state: {product}}}>
        <h3 className="panel-title">{product.productName}</h3>
        </Link>      
      </div>
      <div className="panel-footer">
        <Link className='btn' to={{pathname:'/edit', state: {product}}}>Edit</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button className="btn" onClick={() => handleDeleteProduct(product._id)}>DELETE</button>
      </div>
    </div>
  );
}

export default ProductListItem;