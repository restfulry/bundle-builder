import React from 'react';
import { Link } from 'react-router-dom';
import StoreListItem from '../../components/StoreListItem/StoreListItem';

import {Row, Col, Container, CardDeck} from 'react-bootstrap';


function StoresIndexPage({allStores, user}) {
  console.log("Store Index Page: ", allStores)

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Something for everyone!</h1>
          </Col>
        </Row>
        <CardDeck>
            {allStores.map((store) => <StoreListItem key={store._id} store={store}/>)}
        </CardDeck>
      </Container>
    </div>
  )
};

export default StoresIndexPage;