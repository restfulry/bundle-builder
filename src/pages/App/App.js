import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import SignupPage from "../SignupPage/SignupPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        <LogoutPage />
        <SignupPage />
      </div>
    );
  }
}

export default App;
