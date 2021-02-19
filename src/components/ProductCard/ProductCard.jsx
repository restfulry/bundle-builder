import React from 'react';
import {Link} from 'react-router-dom';

function ProductCard({storeProduct}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{storeProduct.productName}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Description</dt>
          <dd>{storeProduct.description}</dd>
          <dt>Price</dt>
          <dd>${storeProduct.price}</dd>
          <dt>Tags</dt>
          <dd>{storeProduct.tags}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/admin/products'>RETURN TO PRODUCTS</Link>
      </div>
    </div>
  );
}

export default ProductCard;