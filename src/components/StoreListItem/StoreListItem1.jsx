import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './StoreListItem.css'

import {Card, Button} from 'react-bootstrap'

class StoreListItem extends Component {
  state={
    location: this.props.location,
    user: this.props.user,
    store: this.props.location.state.store,
    products: this.props.location.state.store.products,
    bundleIds: this.props.location.state.store.bundles,
  }
  
  handleClick = (e) => {
    e.preventDefault();
    const storeId = e.target.name;

    const {
      selectedStore,
      selectedStoreProducts,
      selectedStoreBundles,
    } = await storesAPI.getCustomerOne(storeId);

    this.setState({
      selectedStore,
      selectedStoreProducts,
      selectedStoreBundles,
    });
  }
  
  render() {
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
                <Button variant="success" style={{ backgroundColor: 'pink' }} >
                  <Link to={{
                    pathname: '/shop/' + store.storeURL,
                    state: {
                      store,
                      selectedStoreProducts,
                      selectedStoreBundles
                    }
                  }}
                  onClick={this.handleClick}
                  name={store._id}
                  >
                    SHOP NOW
                  </Link>
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>

      </div>
    )
  }
}

export default StoreListItem;