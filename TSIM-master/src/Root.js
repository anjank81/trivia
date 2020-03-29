import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Containers
import App from "./App";

// Router root
const Root = ({ store }) => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
