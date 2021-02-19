import React from 'react';
import { Link } from 'react-router-dom';

import {Card, Button} from 'react-bootstrap'

function ShopBundleItem({bundle, store}) {
  return(
      <div>
        <Card className="mx-auto card" style={{ width: '18rem' }}>
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">{bundle.bundleName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">{bundle.price}</Card.Subtitle>
            <Card.Text className="cardText">
              {bundle.description}
            </Card.Text>
            <Card.Link><Button variant="success" style={{ backgroundColor: 'pink' }}><Link to={{
              pathname: '/shop/' + store.storeURL,
              state: {
                store,
              }
              }}>BUY NOW</Link></Button></Card.Link>
          </Card.Body>
        </Card>
      </div>
  )
}

export default ShopBundleItem;