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
  // if product in productsSelected, display count

  render() {
    const {bundle, products} = this.state;
    console.log("ShopBundlePage: ", products)
    return (
      <div>
        <h1>Build Your Bundle</h1>
        <h2>${bundle.price}</h2>

        {this.remainingChoices() === 0 ? <h3>All Set!     <Button variant="primary" type="submit" className="btn" disabled={this.state.invalidForm}>Add to Cart</Button></h3>
        :<div></div>
        }
        {this.remainingChoices() === 1 ?
          <h3>Choose {this.remainingChoices()} More Item:</h3>
        : 
          <h3>Choose {this.remainingChoices()} More Items:</h3> 
        }

        <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>

          {products.map((product,idx) => 

            <div className="productDisplay" key={idx}>

              <h3>{product.productName}</h3>

              <Button 
                name="productsSelected" 
                key={product._id} 
                value={product._id} 
                onClick={this.handleChange}>
                Add ({this.productQtySelected(`${product._id}`)})
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