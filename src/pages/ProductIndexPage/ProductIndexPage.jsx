import React from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

function ProductIndexPage({user, userStore, products, handleDeleteProduct}) {
  console.log("Product Index Page: ", products)

  // show all products that belong to userStore
  // 


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
        {products.map(product => 
          <ProductListItem 
            product={product}
            handleDeleteProduct={handleDeleteProduct} 
            key={product._id}
            user={user}
            />
        )}
      </div>
    </div>
  )
};

export default ProductIndexPage;