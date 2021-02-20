import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from "./ShopBundlePage.css"

import {Form, Row, Col, Button} from 'react-bootstrap'

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
    // this.props.handleAddOrder(this.state.formData);
  }

  handleChange = e => {
    e.preventDefault();

    let targetKey = e.target.name;
    let targetValue = e.target.value;

    let value = this.updateProductsSelected(targetKey, targetValue)

    console.log('e targetKey', targetKey);
    console.log('e targetValue', targetValue);

    const formData = {...this.state.formData, [targetKey]: value};

    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
    console.log("state", this.state.formData)
  };

  updateProductsSelected(key, product) {
    return [...this.state.formData[key], product]
  };


  // Select products to add to bundle
  // Products get pushed to productsSelected
  // disable when productsSelected.length === bundle.maxNumProducts



  render() {
    const {bundle, products} = this.state;
    console.log("ShopBundlePage: ", products)
    return (
      <div>
        <h1>Build Your Bundle</h1>
        <h2>${bundle.price}</h2>

        <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>

          {products.map((product,idx) => 

            <div className="productDisplay" key={idx}>

              <h3>{product.productName}</h3>

              <Button 
                name="productsSelected" 
                key={product._id} 
                value={product._id} 
                onClick={this.handleChange}>
                Add
              </Button>

            </div>
          )}

          <Button variant="primary" type="submit" className="btn" disabled={this.state.invalidForm}>Add to Cart</Button>
          
        </Form>
      </div>
    )
  }

}

export default ShopBundlePage;