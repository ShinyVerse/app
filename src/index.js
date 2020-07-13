import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import Nav from "./Components/Nav";
import * as serviceWorker from "./serviceWorker";

const RouterWrapper = () => (
  <Router>
    <div>
      <Nav />
      <App />
    </div>
  </Router>
);
render(<RouterWrapper />, document.getElementById("root"));

serviceWorker.unregister();
