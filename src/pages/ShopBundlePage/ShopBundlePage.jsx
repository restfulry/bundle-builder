import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from "./ShopBundlePage.css"

import {Form, Card, Row, Col, Button} from 'react-bootstrap'

class ShopBundlePage extends Component { 
  state = {
    invalidForm: true,

    bundle: this.props.location.state.bundle,
    products: this.props.location.state.productsInBundle,

    formData: {
      productsSelected: []
    }
  }
  
  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    // TODO: this.props.handleAddOrder(this.state.formData);
  }

  handleChange = e => {
    e.preventDefault();

    let targetKey = e.target.name;
    let targetValue = e.target.value;

    let value = this.updateProductsSelected(targetKey, targetValue)

    console.log('products', this.state.products);
    console.log('e targetValue', targetValue);
    console.log('maxnUmProducts', this.state.bundle.maxNumProducts);
    
    const formData = {...this.state.formData, [targetKey]: value};
    
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  };

  updateProductsSelected(key, product) {
    if(this.maxProductsSelected()) {
      return [...this.state.formData[key]];
    } else {
      return [...this.state.formData[key], product];
    }
  };

  remainingChoices() {
    let remainingChoices = this.state.bundle.maxNumProducts - this.state.formData.productsSelected.length;
    return remainingChoices;
  }

  maxProductsSelected() {
    let numProductsSelected = this.state.formData.productsSelected.length;
    if( numProductsSelected >= this.state.bundle.maxNumProducts) return true
  }

  productQtySelected(productId) {
    let productsSelected = this.state.formData.productsSelected;
    let qtySelected = productsSelected.filter(selectedProductID => selectedProductID === productId);

    return qtySelected.length;

  }

  getSelectedProductName(p, idx) {
    let productsSelected = this.state.formData.productsSelected;
    let selectedProductID = productsSelected[idx]

    let productsCatalog = this.state.products;

    let selectedProductName = productsCatalog.filter((product) => product._id === selectedProductID)[0].productName; 

    console.log("getSelectedProductName", selectedProductName)

    return selectedProductName;
  }
  // if product in productsSelected, display count

  render() {
    const {bundle, products} = this.state;
    const {productsSelected} = this.state.formData;

    console.log("ShopBundlePage: ", products)
    return (
      <div className="bundle-builder">
        <h1>{bundle.bundleName}</h1>
        <h3>${bundle.price}</h3>

        <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <Row>
          <Col>
          {products.map((product,idx) => 

            <div className="productDisplay" key={idx}>

              <Card className="mx-auto card" style={{ width: '18rem' }}>
                <Card.Body className="cardBody">
                  
                  <Card.Title className="cardTitle">{product.productName}</Card.Title>
                  
                  <Card.Text className="cardText">
                    {product.description}
                  </Card.Text>
                  
                  <Card.Link>
                    <Button 
                      name="productsSelected" 
                      key={product._id} 
                      value={product._id} 
                      onClick={this.handleChange}
                      size="sm"
                      variant="dark"
                      >
                      ADD ({this.productQtySelected(`${product._id}`)})
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          )}
          </Col>
          <Col>
            <h1>Your Bundle</h1>
            {productsSelected.map((selectedProduct, idx)=>
              <div className="shopping-bag">
                {this.getSelectedProductName(selectedProduct, idx)}
              </div>
            )}


          {/* Add to Cart Button */}
              {this.remainingChoices() === 0 ? 
              <h3 className="btn-add-to-cart">
                  <Button
                    variant="success" 
                    type="submit" 
                    className="btn" 
                    disabled={this.state.invalidForm}>
                      All set! Add to Cart
                  </Button>
                </h3>
              :
                <h3 className="btn-add-to-cart">
                  <Button
                    variant="outline-danger" 
                    type="submit" 
                    className="btn" 
                    disabled={true}>
                      Choose {this.remainingChoices()} More
                  </Button>
                </h3>
              }

          </Col>
        </Row>
        
        </Form>
      </div>
    )
  }

}

export default ShopBundlePage;