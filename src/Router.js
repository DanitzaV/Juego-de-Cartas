import React, { Component } from "react";
import {
  BrowserRouter as ReactRouter,
  Route,
  Redirect
} from "react-router-dom";
import App from "./App";
import Cartas from "./componentes/Cartas";
import ViewCartas from "./componentes/ViewCartas";
import View from "./componentes/Poker/ViewCarta";
export default class Router extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ReactRouter>
        <App>
          <Route path="/" component={View} />
          <Route path="/carta" component={ViewCartas} />
        </App>
      </ReactRouter>
    );
  }
}
