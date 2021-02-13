import React from 'react';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

function ProductIndexPage(props) {
  return (
    <div>
      <h1>Products</h1>
      <div>
        {props.products.map(product => 
          <ProductListItem 
            product={product}
            handleDeleteProduct={props.handleDeleteProduct} 
            key={product._id}
            />
        )}
      </div>
    </div>
  )
};

export default ProductIndexPage;