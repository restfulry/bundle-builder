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
      </div>
    )
  }

}

export default AddProductPage;