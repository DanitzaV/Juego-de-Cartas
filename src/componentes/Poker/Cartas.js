import React, { Component } from "react";
import "./Cartas.css";
class Cartas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carta1: 0,
      carta2: 0
    };
    this.clickme = this.props.alerta;
    this.click = this.click.bind(this);
  }
  click(e) {
    console.log(e);
  }
  render() {
    return (
      <button
        key={this.props.id}
        className="btnCarta"
        onClick={this.click(this.clickme)}
      >
        <img
          id={this.props.id}
          width="50"
          className="cartas2"
          src={this.props.img}
        />
      </button>
    );
  }
}
export default Cartas;
