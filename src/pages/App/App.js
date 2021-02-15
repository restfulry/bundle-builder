import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";

import * as productsAPI from "../../services/products-api";

import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import SignupPage from "../SignupPage/SignupPage";

import userService from "../../utils/userService";

import NavBar from "../../components/NavBar/NavBar";
import AddProductPage from "../AddProductPage/AddProductPage";
import ProductIndexPage from "../ProductIndexPage/ProductIndexPage";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser(),
    };
  }

  getInitialState() {
    return {
      products: [],
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleAddProduct = async (newProductData) => {
    const newProduct = await productsAPI.create(newProductData);
    this.setState(
      (state) => ({
        products: [...state.products, newProduct],
      }),
      () => this.props.history.push("/products/new")
    );
  };

  handleDeleteProduct = async (id) => {
    await productsAPI.deleteOne(id);
    this.setState(
      (state) => ({
        products: state.products.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/products")
    );
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const products = await productsAPI.getAll();
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/products"
            render={({ props }) => (
              <ProductIndexPage
                handleDeleteProduct={this.handleDeleteProduct}
                products={this.state.products}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/products/new"
            render={({ props }) => (
              <AddProductPage
                user={this.state.user}
                handleAddProduct={this.handleAddProduct}
              />
            )}
          />
          <Route
            exact
            path="/product/details"
            render={({ location }) => <ProductDetailPage location={location} />}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/logout"
            render={({ history }) => <LogoutPage />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
