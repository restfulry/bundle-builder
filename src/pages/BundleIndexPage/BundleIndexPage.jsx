import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from '../../components/BundleListItem/BundleListItem'

function BundleIndexPage(props) {
  console.log("Bundle Index Page: ", props.bundles)
  return (
    <div>
      <h1>Bundles Index</h1>
      {props.user ?
      <Link to="/admin/bundles/new">Create New Bundle</Link> : <div></div> }
      <div>
        {props.bundles.map((bundle) => <BundleListItem key={bundle._id} bundle={bundle}/>)}
      </div>
    </div>
  )
};

export default BundleIndexPage;