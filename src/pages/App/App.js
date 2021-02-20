import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import * as storesAPI from "../../services/stores-api";
import * as productsAPI from "../../services/products-api";
import * as bundlesAPI from "../../services/bundles-api";
import * as usersAPI from "../../services/users-api";

import NavBar from "../../components/NavBar/NavBar";

import HomePage from "../HomePage/HomePage";

import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import SignupPage from "../SignupPage/SignupPage";
import StoreSignUpPage from "../StoreSignUpPage/StoreSignUpPage";

import userService from "../../utils/userService";
import tokenService from "../../utils/tokenService";

import StoresIndexPage from "../StoresIndexPage/StoresIndexPage";
import StoreHomePage from "../StoreHomePage/StoreHomePage";

import ProductIndexPage from "../ProductIndexPage/ProductIndexPage";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import AddProductPage from "../AddProductPage/AddProductPage";
import EditProductPage from "../EditProductPage/EditProductPage";

import BundleIndexPage from "../BundleIndexPage/BundleIndexPage";
import BundleDetailPage from "../BundleDetailPage/BundleDetailPage";
import AddBundlePage from "../AddBundlePage/AddBundlePage";
import ShopBundlePage from "../ShopBundlePage/ShopBundlePage";
import ShopBundlesIndexPage from "../ShopBundlesIndexPage/ShopBundlesIndexPage";

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

  //----------- STORE HANDLER -----------//
  handleAddStore = async (newStoreData) => {
    const { store, token } = await storesAPI.create(newStoreData);
    tokenService.setToken(token);

    this.setState(
      (state) => ({
        allStores: [...state.allStores, store],
        currentStore: store,
        user: userService.getUser(),
      }),
      () => {
        this.props.history.push("/admin/bundles");
      }
    );
  };

  //----------- BUNDLE HANDLER -----------//
  handleAddBundle = async (newBundleData) => {
    const newBundle = await bundlesAPI.create(newBundleData);
    this.setState(
      (state) => ({
        bundles: [...state.bundles, newBundle],
      }),
      () => this.props.history.push("/admin/bundles")
    );
  };

  handleGetStoreBundles = async (store) => {
    const {
      selectedStore,
      selectedStoreProducts,
      selectedStoreBundles,
    } = await storesAPI.getCustomerOne(store._id);

    this.setState(
      (state) => ({
        selectedStore,
        selectedStoreProducts,
        selectedStoreBundles,
      }),
      () => this.props.history.push("/")
    );
  };

  //----------- PRODUCT HANDLER -----------//
  handleAddProduct = async (newProductData) => {
    const newProduct = await productsAPI.create(newProductData);
    this.setState(
      (state) => ({
        products: [...state.products, newProduct],
      }),
      () => this.props.history.push("/admin/products")
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
      () => this.props.history.push("/admin/products")
    );
  };

  handleDeleteProduct = async (id) => {
    await productsAPI.deleteOne(id);
    this.setState(
      (state) => ({
        products: state.products.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/admin/products")
    );
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const storeID = () => {
      if (this.state.user) return this.state.user.storeOwned[0];
    };

    const {
      currentStore,
      storeProducts,
      storeBundles,
    } = await storesAPI.getOne(storeID());

    const products = await productsAPI.getAll();
    const bundles = await bundlesAPI.getAll();
    const allStores = await storesAPI.getAll();

    this.setState({
      products,
      bundles,
      allStores,
      currentStore,
      storeProducts,
      storeBundles,
    });

    console.log("componentDidMount USER", this.state.user);
    console.log("componentDidMount State", this.state);
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/shop/:currentStore/bundles/:selectedBundle"
            render={({ location, match, user, products }) => (
              <ShopBundlePage
                location={location}
                match={match}
                user={user}
                products={products}
              />
            )}
          />
          <Route
            exact
            path="/shop/:currentStore/bundles"
            render={({ location, match, user, products }) => (
              <ShopBundlesIndexPage
                location={location}
                match={match}
                user={user}
                products={products}
              />
            )}
          />
          <Route
            exact
            path="/shop/:selectedStore"
            render={({ location, match, handleGetStoreBundles }) => (
              <StoreHomePage
                location={location}
                match={match}
                user={this.state.user}
                handleGetStoreBundles={handleGetStoreBundles}
              />
            )}
          />
          <Route
            exact
            path="/shop"
            render={({ location, handleGetStoreBundles }) => (
              <StoresIndexPage
                location={location}
                handleGetStoreBundles={handleGetStoreBundles}
                allStores={this.state.allStores}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/admin/bundles/new"
            render={({ props }) => (
              <AddBundlePage
                user={this.state.user}
                currentStore={this.state.currentStore}
                handleAddBundle={this.handleAddBundle}
                storeBundles={this.state.storeBundles}
                storeProducts={this.state.storeProducts}
              />
            )}
          />
          <Route
            exact
            path="/admin/bundle/details"
            render={({ location }) => (
              <BundleDetailPage
                user={this.state.user}
                location={location}
                currentStore={this.state.currentStore}
                storeBundles={this.state.storeBundles}
                storeProducts={this.state.storeProducts}
              />
            )}
          />
          <Route
            exact
            path="/admin/bundles"
            render={({ props }) => (
              <BundleIndexPage
                user={this.state.user}
                currentStore={this.state.currentStore}
                storeBundles={this.state.storeBundles}
                storeProducts={this.state.storeProducts}
              />
            )}
          />
          <Route
            exact
            path="/admin/products/new"
            render={({ handleAddProduct }) => (
              <AddProductPage
                user={this.state.user}
                currentStore={this.state.currentStore}
                handleAddProduct={handleAddProduct}
              />
            )}
          />
          <Route
            exact
            path="/admin/products"
            render={({ handleUpdateProduct, handleDeleteProduct }) => (
              <ProductIndexPage
                handleUpdateProduct={handleUpdateProduct}
                handleDeleteProduct={handleDeleteProduct}
                storeProducts={this.state.storeProducts}
                user={this.state.user}
                currentStore={this.state.currentStore}
              />
            )}
          />
          <Route
            exact
            path="/admin/product/details"
            render={({ location }) => (
              <ProductDetailPage
                location={location}
                storeProducts={this.state.storeProducts}
              />
            )}
          />
          <Route
            exact
            path="/admin/product/edit"
            render={({ location, handleUpdateProduct }) => (
              <EditProductPage
                handleUpdateProduct={handleUpdateProduct}
                storeProducts={this.state.storeProducts}
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
            path="/store/new"
            render={({ history }) => (
              <StoreSignUpPage
                history={history}
                handleAddStore={this.handleAddStore}
                user={this.state.user}
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
          <Route exact path="/" render={() => <HomePage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
