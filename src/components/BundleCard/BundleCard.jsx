import React from 'react';
import {Link} from 'react-router-dom';

function BundleCard({bundle, products, productsInBundle}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{bundle.bundleName}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Description</dt>
          <dd>{bundle.description}</dd>
          <dt>Price</dt>
          <dd>${bundle.price}</dd>
          <dt>Discount Type</dt>
          <dd>{bundle.discountType}</dd>
          <dt>Required Products</dt>
          <dd>{bundle.requiredProducts}</dd>
          <dt>Eligible Products</dt>
          {productsInBundle.map((product) => <dd><Link className='btn' key={product._id} to={{pathname:'/product/details', state: {product}}}>{product.productName}</Link></dd>)}
          <dt>Discount Amount</dt>
          <dd>{bundle.discountAmount}</dd>
          <dt>Minimum Number of Products Required</dt>
          <dd>{bundle.minNumProducts}</dd>
          <dt>Maximum Number of Products Required</dt>
          <dd>{bundle.maxNumProducts}</dd>
          <dt>Tags</dt>
          <dd>{bundle.tags}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/bundles'>RETURN TO BUNDLES</Link>
      </div>
    </div>
  );
}

export default BundleCard;