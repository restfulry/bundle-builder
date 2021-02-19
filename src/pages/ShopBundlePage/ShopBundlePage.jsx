import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Form, Button} from 'react-bootstrap'

class ShopBundlePage extends Component { 
  state = {
    bundle: this.props.location.state.bundle,
    products: this.props.location.state.productsInBundle,
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddBundle(this.state.formData);
  }

  handleChange = e => {
    e.preventDefault();

    let value = e.target.value;

    const formData = {...this.state.formData, [e.target.name]: value};

    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  };

  render() {
    const {bundle, products} = this.state;
    console.log("ShopBundlePage: ", products)
    return (
      <div>
        <h1>Build Your Bundle</h1>
        <h2>${bundle.price}</h2>
        <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>


          
        </Form>
      </div>
    )
  }

}

export default ShopBundlePage;