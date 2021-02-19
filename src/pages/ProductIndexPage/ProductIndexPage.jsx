import React from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

function ProductIndexPage({user, currentStore, handleDeleteProduct, storeProducts}) {

  console.log('ProductIndexPage storeProducts', storeProducts)
  console.log('ProductIndexPage currentStore', currentStore)
  // show all products that belong to userStore

  // function isAdmin() {
  //   if(user.storeOwned.includes(store._id)){
  //     return true
  //   };
  // };

  return (
    <div>
      <h1>Products Index</h1>
      {user ?
      <Link to="/admin/products/new">Add New Product</Link> : <div></div>}
      <div>
        {storeProducts.map(storeProduct => 
          <ProductListItem 
           storeProduct={storeProduct}
            handleDeleteProduct={handleDeleteProduct} 
            key={storeProduct._id}
            user={user}
            />
        )}
      </div>
    </div>
  )
};

export default ProductIndexPage;