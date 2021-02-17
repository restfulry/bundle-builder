import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

function StoresIndexPage(props) {
  console.log("Store Index Page: ", props)
  return (
    <div>
      <h1>Something for everyone!</h1>
        {props.allStores.map(store => {
          if (store.storeName) {
          console.log(store);
          return (<Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{store.storeName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Store Category</Card.Subtitle>
              <Card.Text>
                Store Description Goes Here
              </Card.Text>
              <Card.Link href="/shop">Shop</Card.Link>
            </Card.Body>
          </Card>)
          }
        }
      )}
    </div>
  )
};

export default StoresIndexPage;