import React, { Component } from "react";
import {
  BrowserRouter as ReactRouter,
  Route,
  Redirect
} from "react-router-dom";
import App from "./App";
import Cartas from "./componentes/Cartas";
export default class Router extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ReactRouter>
        <App>
          <Route path="/" component={Cartas} />
        </App>
      </ReactRouter>
    );
  }
}
