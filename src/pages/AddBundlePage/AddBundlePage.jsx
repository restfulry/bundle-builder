import React, {Component} from 'react';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom'

import {Form, Button} from 'react-bootstrap'

class AddBundlePage extends Component {
  state={
    invalidForm: true,
    formData: {
      bundleName: '',
      description: '',
      price: 0,
      discountType: 'flat',
      discountAmount: 0,
      minNumProducts: 1,
      maxNumProducts: 999,
      tags: [],
      requiredProducts: [],
      eligibleProducts: [],
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddBundle(this.state.formData);
  }

  handleChange = e => {
    e.preventDefault();

    let value;

    if (e.target.name === 'requiredProducts' || e.target.name === 'eligibleProducts') {
      value = this.updateRequiredOrEligible(e.target.name, e.target.value);
    } else {
      value = e.target.value;
    };

    const formData = {...this.state.formData, [e.target.name]: value, bundleStore: this.props.currentStore._id};

    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  };

  updateRequiredOrEligible(type, product) {
    if (this.state.formData[type].includes(product)) {
      return [...this.state.formData[type]];
    } else {
      return [...this.state.formData[type], product];
    }
  }

  render() {
    return (
      <div>
        {this.props.user ? 
          <div id="withUser">
            <h1>Add Bundle</h1>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  placeholder="Product Name" 
                  name="bundleName" 
                  type="bundleName" 
                  value={this.state.formData.bundleName} 
                  onChange={this.handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                  placeholder="Description" 
                  name="description"
                  type="text"
                  as="textarea" 
                  value={this.state.formData.description} 
                  onChange={this.handleChange} 
                  rows={3} 
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control 
                  placeholder="$" 
                  name="price"
                  type="number"
                  value={this.state.formData.price} 
                  onChange={this.handleChange} 
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Discount Amount</Form.Label>
                <Form.Control 
                  placeholder="$" 
                  name="discountAmount"
                  type="number"
                  value={this.state.formData.discountAmount} 
                  onChange={this.handleChange} 
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Minimum Number of Products Required for Discount</Form.Label>
                <Form.Control 
                  placeholder="0" 
                  name="minNumProducts"
                  type="number"
                  value={this.state.formData.minNumProducts} 
                  onChange={this.handleChange} 
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Maximum Number of Products in Bundle</Form.Label>
                <Form.Control 
                  placeholder="999" 
                  name="maxNumProducts"
                  type="number"
                  value={this.state.formData.maxNumProducts} 
                  onChange={this.handleChange} 
                  required
                />
              </Form.Group>
              {/* <Button variant="primary" type="submit" className="btn" disabled={this.state.invalidForm}>Add bundle
              </Button> */}
            </Form>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
    {/*           
              <div className="form-group">
                <label>Name</label>
                <input className="form-control" name="bundleName" value={this.state.formData.bundleName} onChange={this.handleChange} required />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={this.state.formData.description} onChange={this.handleChange} required/>
              </div>

              <div className="form-group">
                <label>Price</label>
                <input className="form-control" name="price" value={this.state.formData.price} onChange={this.handleChange} type="number" required />
              </div>

              <div className="form-group">
                <label>Discount Amount</label>
                <input className="form-control" name="discountAmount" value={this.state.formData.discountAmount} onChange={this.handleChange} type="number" required />
              </div>

              <div className="form-group">
                <label>Minimum Number of Products Required for Discount</label>
                <input className="form-control" name="minNumProducts" value={this.state.formData.minNumProducts} onChange={this.handleChange} type="number"/>
              </div>

              <div className="form-group">
                <label>Maximum Number of Products in Bundle</label>
                <input className="form-control" name="maxNumProducts" value={this.state.formData.maxNumProducts} onChange={this.handleChange} type="number"/>
              </div> */}

              <label>
                Select Discount Type
                <select name="discountType" value={this.state.formData.discountType} onChange={e => {this.handleChange(e)}} required>
                  <option value="flat">Flat Discount</option>
                  <option value="tiered">Tiered</option>
                </select>
              </label>

              <label>
                Required Products
              </label>
                <select name="requiredProducts" 
                        value={[this.state.formData.requiredProducts]} 
                        onChange={this.handleChange} 
                        multiple={true}>
                  {this.props.storeProducts.map((product, idx) => 
                  <option 
                    key={product._id} 
                    value={product._id}>
                      {product.productName}
                  </option>)}
                </select>

              <label>
                Eligible Products
                <select name="eligibleProducts" value={[this.state.formData.eligibleProducts]} onChange={this.handleChange} multiple={true}>
                {this.props.storeProducts.map((product, idx) => <option key={product._id} value={product._id}>{product.productName}</option>)}
                </select>
              </label>

              <div className="form-group">
                <label>Tags</label>
                <input className="form-control" name="tags" value={this.state.formData.tags} onChange={this.handleChange} />
              </div>

              <button type="submit" className="btn" disabled={this.state.invalidForm}>Add bundle</button>
            </form>
          </div>
        : 
        <div id="noUser">
          <h1>You must be logged in to view this page.</h1>
          <Button className="back-btn" variant="success" style={{ backgroundColor: 'pink' }}>
            <Link to='/'>
              Back to home
            </Link>
          </Button>
        </div>
        }
      </div>
    )
  }
}

export default withRouter(AddBundlePage);