import React, {Component} from 'react';

class AddProductPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      productName: 'Product Name',
      description: 'Description',
      price: 0,
      tags: 'Product Tags',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddProduct(this.state.formData);
  }

  handleChange = e => {
    const formData = {...this.state.formData,
    [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div>
        <h1>Add Product</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handlSubmit}>
          
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" name="productName" value={this.state.formData.productName} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input className="form-control" name="description" value={this.state.formData.description} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input className="form-control" name="price" value={this.state.formData.price} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Tags</label>
            <input className="form-control" name="tags" value={this.state.formData.tags} onChange={this.handleChange} required />
          </div>

          <button type="submit" className="btn" disabled={this.state.invalidForm}>Add Product</button>
        </form>
      </div>
    )
  }

}

export default AddProductPage;