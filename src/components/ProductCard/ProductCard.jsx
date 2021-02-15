import React from 'react';
import {Link} from 'react-router-dom';

function ProductCard({product}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{product.productName}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Description</dt>
          <dd>{product.description}</dd>
          <dt>Price</dt>
          <dd>{product.price}</dd>
          <dt>Tags</dt>
          <dd>{product.tags}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/products'>RETURN TO PRODUCTS</Link>
      </div>
    </div>
  );
}

export default ProductCard;