import React from 'react';
import { Link } from 'react-router-dom';
import StoreListItem from '../../components/StoreListItem/StoreListItem';
import styles from './StoresIndexPage.css'

import {Row, Col, Container, CardDeck} from 'react-bootstrap';

function StoresIndexPage({allStores, user}) {
  console.log("Store Index Page: ", allStores)

  return (
    <div className="contentBody">
      <h1>Something for everyone!</h1>
      <Container fluid>
        <CardDeck className="mx-auto storeCards">
            {allStores.map((store) => <StoreListItem key={store._id} user={user} store={store}/>)}
        </CardDeck>
      </Container>
    </div>
  )
};

export default StoresIndexPage;