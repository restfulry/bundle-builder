import React from 'react';
import { Link } from 'react-router-dom';

function BundleListItem({bundle, user, currentStore, products}) {
  return(
    <div className='panel'>
    <div className="panel-heading">
    <h3 className="panel-title">
      <Link className='btn' to={{pathname:'/admin/bundle/details', state: {bundle}}}>
        {bundle.bundleName}
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp; ${bundle.price}  
    </h3>
    </div>

    <div className="panel-footer">
      <Link className='btn' to={{
        pathname:'/shop/' + currentStore.storeURL + '/' + bundle.bundleName,
        state: {
          currentStore,
          bundle,
          user,
          products
        }
      }}>Shop Bundle</Link>
      {/* <Link className='btn' to={{pathname:'/admin/bundle/edit', state: {bundle, handleUpdateBundle}}}>Edit</Link> */}
      {/* &nbsp;&nbsp;|&nbsp;&nbsp; */}
      {/* <button className="btn" onClick={() => handleDeleteBundle(product._id)}>DELETE</button> */}
    </div>
  </div>
  )
}

export default BundleListItem;