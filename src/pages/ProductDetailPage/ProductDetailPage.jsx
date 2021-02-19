import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'

function ProductDetailPage(props) {
  const storeProduct = props.location.state.storeProduct;
  return(
    <div>
      <h1>Product Details</h1>
      <ProductCard key={storeProduct._id} storeProduct={storeProduct}/>
    </div>
  );
}

export default ProductDetailPage;