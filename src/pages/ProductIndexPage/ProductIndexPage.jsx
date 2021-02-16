import React from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

function ProductIndexPage(props) {
  return (
    <div>
      <h1>Products Index</h1>
      <Link to="/products/new">Add New Product</Link>
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