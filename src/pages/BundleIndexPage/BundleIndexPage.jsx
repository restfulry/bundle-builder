import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from '../../components/BundleListItem/BundleListItem'
import {Button} from 'react-bootstrap';

function BundleIndexPage({storeBundles, storeProducts, currentStore, user}) {
  return (
    <div>
      {user ? 
        <div id="admin">
          <h1>Bundles Index</h1>
          <Link to="/admin/bundles/new">Create New Bundle</Link> 
          {storeBundles ?
          <div>
            {storeBundles.map((bundle) => <BundleListItem key={bundle._id} bundle={bundle} currentStore={currentStore} storeProducts={storeProducts}/>)}
          </div>
          : <div>No Bundles Yet</div>
          }
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

export default BundleIndexPage;