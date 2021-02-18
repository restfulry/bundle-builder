import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ShopBundlePage extends Component {
  state = {
    invalidForm: true,
    formData: {
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleBuyBundle(this.state.formData);
  } 

  handleChange = e => {
    const formData = {...this.state.formData,
    [e.target.name]: e.target.value, createdBy: this.props.user._id, productStore: this.props.user.storeOwned[0]};
    console.log('handleChange form Data: ', this.props.user)
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div>
        <h1>Build Your Bundle</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          {console.log(this.props)}
        {/* {this.props.products.map(product => 
          <div>{product.productName}</div>
        )} */}

          <button type="submit" className="btn" disabled={this.state.invalidForm}>Buy Now</button>
        </form>
      </div>
    )
  }

}

export default ShopBundlePage;