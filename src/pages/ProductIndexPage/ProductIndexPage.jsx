import React from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

function ProductIndexPage(props) {
  console.log("Product Index Page: ", props.products)

  return (
    <div>
      <h1>Products Index</h1>
      {props.user ?
      <Link to="/admin/products/new">Add New Product</Link> : <div></div>}
      <div>
        {props.products.map(product => 
          <ProductListItem 
            product={product}
            handleDeleteProduct={props.handleDeleteProduct} 
            key={product._id}
            user={props.user}
            />
        )}
      </div>
    </div>
  )
};

export default ProductIndexPage;