import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from '../../components/BundleListItem/BundleListItem'

function BundleIndexPage(props) {
  return (
    <div>
      <h1>Bundles Index</h1>
      <Link to="/bundles/new">Create New Bundle</Link>
      <div>
        {props.bundles.map(bundle => <BundleListItem />)}
      </div>
    </div>
  )
};

export default BundleIndexPage;