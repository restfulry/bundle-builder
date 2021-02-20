import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './StoreHomePage.css';

import * as storesAPI from "../../services/stores-api";

class StoreHomePage extends Component {
  state={
    location: this.props.location,
    user: this.props.user,
    store: this.props.location.state.store,
    products: this.props.location.state.store.products,
    bundleIds: this.props.location.state.store.bundles,
  }

  async componentDidMount(props, state) {
    const storeId = this.state.store._id;

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
    console.log("StoreHomePage CDM: ", this.state)
  }
    
    render() {
      return (
        <div>
        <div className="header">
          <h1>Welcome to {this.state.store.storeName}</h1>
        </div>
          <Button className="btn" variant="success" style={{ backgroundColor: 'pink' }} >
            <Link className="link" to={{
                    pathname: '/shop/' + this.state.store.storeURL + '/bundles',
                    state: {
                      selectedStore: this.state.selectedStore,
                      selectedStoreProducts: this.state.selectedStoreProducts,
                      selectedStoreBundles: this.state.selectedStoreBundles
                    }
                  }}
                  >
                    SHOP NOW
            </Link>
          </Button>
        </div>
      )
    }
  };

export default StoreHomePage;