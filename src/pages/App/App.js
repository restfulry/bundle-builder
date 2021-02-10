import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        <SignupPage />
      </div>
    );
  }
}

export default App;
