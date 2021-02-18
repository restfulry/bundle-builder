import React from 'react';
import { Link } from 'react-router-dom';

function BundleListItem({bundle, user, store, products}) {
  return(
    <div className='panel'>
    <div className="panel-heading">
    <h3 className="panel-title">
      {user ? 
      <Link className='btn' to={{pathname:'/admin/bundle/details', state: {bundle}}}>
        {bundle.bundleName}
      </Link>     
      : 
      <Link className='btn' to={{
        pathname:'/shop/' + store.storeURL + '/' + bundle.bundleName,
        state: {
          store,
          bundle,
          user,
          products
        }
      }}/>
      }

        &nbsp;&nbsp;|&nbsp;&nbsp; ${bundle.price}  
    </h3>
    </div>
    <div className="panel-footer">
      {/* <Link className='btn' to={{pathname:'/admin/bundle/edit', state: {bundle, handleUpdateBundle}}}>Edit</Link> */}
      {/* &nbsp;&nbsp;|&nbsp;&nbsp; */}
      {/* <button className="btn" onClick={() => handleDeleteBundle(product._id)}>DELETE</button> */}
    </div>
  </div>
  )
}

export default BundleListItem;