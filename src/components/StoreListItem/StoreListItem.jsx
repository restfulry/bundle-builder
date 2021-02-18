import React from 'react';
import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card'

function StoreListItem({ store }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{store.storeName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{store.category}</Card.Subtitle>
          <Card.Text>
            {store.description}
          </Card.Text>
          <Card.Link><Link to={{
            pathname: '/shop/' + store.storeURL,
            state: {
              store
            }
            }}>SHOP NOW</Link></Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default StoreListItem;