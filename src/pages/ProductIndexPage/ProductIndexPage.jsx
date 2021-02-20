import React from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

function ProductIndexPage({user, currentStore, handleDeleteProduct, handleUpdateProduct, storeProducts}) {
  // show all products that belong to userStore

  // function isAdmin() {
  //   if(user.storeOwned.includes(store._id)){
  //     return true
  //   };
  // };

  return (
    <div>
      <h1>Products Index</h1>
      <Link to="/admin/products/new">Add New Product</Link> 
      {storeProducts ?
        <div>
          {storeProducts.map(storeProduct => 
            <ProductListItem 
              storeProduct={storeProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleUpdateProduct={handleUpdateProduct}
              key={storeProduct._id}
              user={user}
              />
          )}
        </div>
      : <div> No Products Yet :(</div>}
    </div>
  )
};

export default ProductIndexPage;