import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";

import * as storesAPI from "../../services/stores-api";
import * as productsAPI from "../../services/products-api";
import * as bundlesAPI from "../../services/bundles-api";

import NavBar from "../../components/NavBar/NavBar";

import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import SignupPage from "../SignupPage/SignupPage";

import userService from "../../utils/userService";

import StoresIndexPage from "../StoresIndexPage/StoresIndexPage";

import ProductIndexPage from "../ProductIndexPage/ProductIndexPage";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import AddProductPage from "../AddProductPage/AddProductPage";
import EditProductPage from "../EditProductPage/EditProductPage";

import BundleIndexPage from "../BundleIndexPage/BundleIndexPage";
import BundleDetailPage from "../BundleDetailPage/BundleDetailPage";
import AddBundlePage from "../AddBundlePage/AddBundlePage";

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
      bundles: [],
      allStores: [],
    };
  }

  //----------- AUTH -----------//
  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  //----------- BUNDLE HANDLER -----------//
  handleAddBundle = async (newBundleData) => {
    const newBundle = await bundlesAPI.create(newBundleData);
    this.setState(
      (state) => ({
        bundles: [...state.bundles, newBundle],
      }),
      () => this.props.history.push("/bundles")
    );
  };

  //----------- PRODUCT HANDLER -----------//
  handleAddProduct = async (newProductData) => {
    const newProduct = await productsAPI.create(newProductData);
    this.setState(
      (state) => ({
        products: [...state.products, newProduct],
      }),
      () => this.props.history.push("/products")
    );
  };

  handleUpdateProduct = async (updatedProductData) => {
    const updatedProduct = await productsAPI.update(updatedProductData);
    const newProductsArray = this.state.products.map((p) =>
      p._id === updatedProduct._id ? updatedProduct : p
    );
    this.setState(
      {
        products: newProductsArray,
      },
      () => this.props.history.push("/products")
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
    const bundles = await bundlesAPI.getAll();
    const allStores = await storesAPI.getAll();
    this.setState({ products, bundles, allStores });
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <StoresIndexPage allStores={this.state.allStores} />}
          />
          <Route
            exact
            path="/bundles"
            render={({ props }) => (
              <BundleIndexPage
                bundles={this.state.bundles}
                user={this.state.user}
                products={this.state.products}
              />
            )}
          />
          <Route
            exact
            path="/bundles/new"
            render={({ props }) => (
              <AddBundlePage
                user={this.state.user}
                handleAddBundle={this.handleAddBundle}
                products={this.state.products}
              />
            )}
          />
          <Route
            exact
            path="/bundle/details"
            render={({ location }) => (
              <BundleDetailPage
                location={location}
                products={this.state.products}
              />
            )}
          />
          <Route
            exact
            path="/products"
            render={({ props }) => (
              <ProductIndexPage
                handleUpdateProduct={this.handleUpdateProduct}
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
            path="/product/edit"
            render={({ location }) => (
              <EditProductPage
                handleUpdateProduct={this.handleUpdateProduct}
                location={location}
              />
            )}
          />
          {/* AUTH */}
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
