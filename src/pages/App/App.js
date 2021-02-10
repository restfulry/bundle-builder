import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import LoginPage from "../LoginPage/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
