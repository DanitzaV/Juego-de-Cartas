import React, { Component } from "react";
import "./Cartas.css";
import back from "./../../img/espalda.png";
import { Hidden } from "@material-ui/core";

class Cartase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false,
      carta1: [],
      carta2: 0
    };
    this.id = this.props.id.toString();
    this.be = this.props.be;
    this.mos = this.props.mos;
  }
  numero(e, i) {
    this.be(e, i);
  }

  render() {
    return (
      <div>
        <Hidden only={["xl", "sm", "md", "lg"]}>
          <div
            className="cartaxs"
            onClick={() => {
              this.numero(this.id, this.props.i);
            }}
          >
            <Hidden only={["xl", "sm", "md", "lg"]}>
              <div className="contenidorxs">
                <img
                  id={this.props.i.toString()}
                  width="60px"
                  className="hide"
                  src="https://rawgit.com/DanitzaV/Juego-de-Cartas/2f3c414627fc7201c7a8d3cb97eff88bf189f681/src/img/espalda.png"
                />
                <img
                  id={this.props.i.toString()}
                  width="60px"
                  src={this.props.img}
                />
              </div>
            </Hidden>
            <Hidden only={["xs"]}>
              <div className="contenido">
                <img
                  id={this.props.i.toString()}
                  width="100px"
                  className="hide"
                  src="https://rawgit.com/DanitzaV/Juego-de-Cartas/2f3c414627fc7201c7a8d3cb97eff88bf189f681/src/img/espalda.png"
                />
                <img
                  id={this.props.i.toString()}
                  width="100px"
                  src={this.props.img}
                />
              </div>
            </Hidden>
          </div>
        </Hidden>
        <Hidden only={["xs"]}>
          <div
            className="carta"
            onClick={() => {
              this.numero(this.id, this.props.i);
            }}
          >
            <Hidden only={["xl", "sm", "md", "lg"]}>
              <div className="contenidorxs">
                <img
                  id={this.props.i.toString()}
                  width="60px"
                  className="hide"
                  src="https://rawgit.com/DanitzaV/Juego-de-Cartas/2f3c414627fc7201c7a8d3cb97eff88bf189f681/src/img/espalda.png"
                />
                <img
                  id={this.props.i.toString()}
                  width="60px"
                  src={this.props.img}
                />
              </div>
            </Hidden>
            <Hidden only={["xs"]}>
              <div className="contenido">
                <img
                  id={this.props.i.toString()}
                  width="100px"
                  className="hide"
                  src="https://rawgit.com/DanitzaV/Juego-de-Cartas/2f3c414627fc7201c7a8d3cb97eff88bf189f681/src/img/espalda.png"
                />
                <img
                  id={this.props.i.toString()}
                  width="100px"
                  src={this.props.img}
                />
              </div>
            </Hidden>
          </div>
        </Hidden>
      </div>
    );
  }
}

export default Cartase;
