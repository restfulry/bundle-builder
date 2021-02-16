import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <Route render={({ history }) => <App history={history} />} />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
