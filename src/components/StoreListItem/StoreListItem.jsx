import React from 'react';
import {Link} from 'react-router-dom';
import styles from './StoreListItem.css'

import {Card, Button} from 'react-bootstrap'

function StoreListItem({ store, user, handleGetStoreBundles }) {

  return (
    <div>
        <Card className="mx-auto card" style={{ width: '18rem' }}>
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">{store.storeName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">{store.category}</Card.Subtitle>
            <Card.Text className="cardText">
              {store.description}
            </Card.Text>

            <Card.Link>
              <Button variant="success" style={{ backgroundColor: 'pink' }}>
                <Link to={{
                  pathname: '/shop/' + store.storeURL,
                  state: {
                    store,
                  }
                }}>
                  SHOP NOW
                </Link>
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>

    </div>
  )
}

export default StoreListItem;