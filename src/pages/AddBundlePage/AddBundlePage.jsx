import React, {Component} from 'react';
import { withRouter } from "react-router";

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
      maxNumProducts: 9999,
      tags: [],
      requiredProducts: [],
      eligibleProducts: [...this.props.products],
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddBundle(this.state.formData);
  }

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value, storeOwner: this.props.user._id};

    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  };

  render() {
    return (
      <div>
        <h1>Add Bundle</h1>

        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          
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
            <input className="form-control" name="price" value={this.state.formData.price} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Tags</label>
            <input className="form-control" name="tags" value={this.state.formData.tags} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Discount Amount</label>
            <input className="form-control" name="discountAmount" value={this.state.formData.discountAmount} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Minimum Number of Products Required for Discount</label>
            <input className="form-control" name="minNumProducts" value={this.state.formData.minNumProducts} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>Maximum Number of Products in Bundle</label>
            <input className="form-control" name="maxNumProducts" value={this.state.formData.maxNumProducts} onChange={this.handleChange}/>
          </div>

          <label>
            Select Discount Type
            <select value={this.state.formData.discountType} onChange={this.handleChange} required>
              <option value="flat">Flat Discount</option>
              <option value="tiered">Tiered</option>
            </select>
          </label>

          <label>
            Required Products
            <select value={this.state.formData.requiredProducts} onChange={this.handleChange} multiple={true}>
            {this.props.products.map((product, idx) => <option key={idx} value={product}>{product.productName}</option>)}
            </select>
          </label>

          <label>
            Eligible Products
            <select value={this.state.formData.eligibleProducts} onChange={this.handleChange} multiple={true}>
            {this.props.products.map((product, idx) => <option key={idx} value={product}>{product.productName}</option>)}
            </select>
          </label>

          <button type="submit" className="btn" disabled={this.state.invalidForm}>Add bundle</button>
        </form>
      </div>
    )
  }
}

export default withRouter(AddBundlePage);