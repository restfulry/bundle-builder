import React, {Component} from 'react';
import { withRouter } from "react-router";

class StoreSignUpPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      storeName: 'Store Name',
      description: 'Description',
      category: 'Food, Home Goods, etc...',
      storeURL: '',
      storeAdmin: null,
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log("HANDLE SUBMIT Form Data",this.state.formData)
    console.log("HANDLE SUBMIT User",this.props.user)
    this.props.handleAddStore(this.state.formData);
  }

  handleChange = e => {
    const formData = {...this.state.formData,
    [e.target.name]: e.target.value, storeAdmin: this.props.user._id};

    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div>
        <h1>Add Store</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          
          <div className="form-group">
            <label>Store Name</label>
            <input className="form-control" name="storeName" value={this.state.formData.storeName} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Store URL (no spaces)</label>
            <input className="form-control" name="storeURL" value={this.state.formData.storeURL} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input className="form-control" name="description" value={this.state.formData.description} onChange={this.handleChange} required />
          </div>

          <div className="form-group">
            <label>Store Category</label>
            <input className="form-control" name="category" value={this.state.formData.category} onChange={this.handleChange} required />
          </div>

          <button type="submit" className="btn" disabled={this.state.invalidForm}>Add Store</button>
        </form>
      </div>
    )
  }
}

export default withRouter(StoreSignUpPage);