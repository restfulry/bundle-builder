import React from 'react';
import {Link} from 'react-router-dom';

function ProductListItem({storeProduct, handleDeleteProduct, handleUpdateProduct, user}) {
  return (
    <div className='panel'>
      <div className="panel-heading">
      <h3 className="panel-title">
        <Link className='btn' to={{pathname:'/admin/product/details', state: {storeProduct}}}>
          {storeProduct.productName}
        </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp; ${storeProduct.price}
      </h3>
      </div>
      {user ?
      <div className="panel-footer">
        <Link 
          className='btn' 
          to={{pathname:'/admin/product/edit', 
          state: {
            storeProduct, 
            handleUpdateProduct
          }}}>
            Edit
        </Link>

        &nbsp;&nbsp;|&nbsp;&nbsp;

        <button 
          className="btn" 
          onClick={() => handleDeleteProduct(storeProduct._id)}>
            DELETE
        </button>
      </div>
      : <div></div>}
    </div>
  );
}

export default ProductListItem;