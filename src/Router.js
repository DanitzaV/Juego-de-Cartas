import React, { Component } from "react";
import {
    BrowserRouter as ReactRouter,
    Route,
    Redirect
} from "react-router-dom";
import App from "./App";
import ViewCarta from './Components/Carta/ViewCartas';
export default class Router extends Component {
    render() {
        return (
            <ReactRouter>
                <App>
                <Route path="/" component={ViewCarta} />
                </App>
            </ReactRouter>
        );
    }
}