import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import SignupPage from "../SignupPage/SignupPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/login" className="NavBar-link">
          LOG IN
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className="NavBar-link">
          SIGN UP
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/logout" className="NavBar-link">
          LOG OUT
        </Link>
        <Route exact path="/signup" render={({ history }) => <SignupPage />} />
        <Route exact path="/login" render={({ history }) => <LoginPage />} />
        <Route exact path="/logout" render={({ history }) => <LogoutPage />} />
      </div>
    );
  }
}

export default App;
