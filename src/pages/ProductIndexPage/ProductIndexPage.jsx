import React from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

import {Button} from 'react-bootstrap'

function ProductIndexPage({user, currentStore, handleDeleteProduct, handleUpdateProduct, storeProducts}) {
  return (
    <div>
      {user ? 
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
      :
      <div id="noUser">
        <h1>You must be logged in to view this page.</h1>
        <Button className="back-btn" variant="success" style={{ backgroundColor: 'pink' }}>
          <Link to='/'>
            Back to home
          </Link>
        </Button>
      </div>
      }
    </div>
  )
};

export default ProductIndexPage;