import React from 'react';
import { Link } from 'react-router-dom';

function StoresIndexPage(props) {
  console.log("Store Index Page: ", props)
  return (
    <div>
      <h1>Something for everyone!</h1>
      <div>
        {props.allStores.map(store => <div>{store.storeName}</div>)}
      </div>
    </div>
  )
};

export default StoresIndexPage;