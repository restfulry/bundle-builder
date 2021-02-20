import React from 'react';
import { Link } from 'react-router-dom';

import {Card, Button, Col} from 'react-bootstrap'

function ShopBundleItem({bundle, store, products}) {
  const productsInBundle = products.filter(product => bundle.eligibleProducts.includes(product._id))
  
  return(
        <Col class="col-lg-4 align-items-stretch">  
          <Card className="mx-auto card" style={{ width: '18rem', height: '12rem' }}>
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">{bundle.bundleName}</Card.Title>
              
              <Card.Subtitle className="mb-2 text-muted cardSubtitle">{bundle.price}</Card.Subtitle>
              
              <Card.Text className="cardText">
                {bundle.description}
              </Card.Text>
              
              <Card.Link>
                <Button variant="success" style={{ backgroundColor: 'pink' }}>
                  <Link to={{
                    pathname: '/shop/' + store.storeURL + '/bundles/' + bundle.bundleName,
                    state: {
                      store,
                      bundle,
                      productsInBundle
                    }
                  }}>
                    BUILD BUNDLE
                  </Link>
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
  )
}

export default ShopBundleItem;