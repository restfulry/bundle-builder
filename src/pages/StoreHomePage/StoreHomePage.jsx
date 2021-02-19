import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import * as storesAPI from "../../services/stores-api";

import { Button } from 'react-bootstrap';

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
          <h1>Welcome to {this.state.store.storeName}</h1>
          <Button>
            <Link to={{
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