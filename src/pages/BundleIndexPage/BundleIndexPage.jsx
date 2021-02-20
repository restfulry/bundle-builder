import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from '../../components/BundleListItem/BundleListItem'

function BundleIndexPage({storeBundles, storeProducts, currentStore, user}) {
  return (
    <div>
      <h1>Bundles Index</h1>
      <Link to="/admin/bundles/new">Create New Bundle</Link> 
      {storeBundles ?
      <div>
        {storeBundles.map((bundle) => <BundleListItem key={bundle._id} bundle={bundle} currentStore={currentStore} storeProducts={storeProducts}/>)}
      </div>
      : <div>No Bundles Yet</div>
      }
    </div>
  )
};

export default BundleIndexPage;