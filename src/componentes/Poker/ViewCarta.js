import React, { Component } from "react";
import "./Cartas.css";
import Carta from "./Cartas";
import { Grid } from "@material-ui/core";
import data from "/src/data/datos.json";
class Cartas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartas1: data.data1,
      cartas2: data.data2,
      carta1: 0,
      carta2: 0,
      value: null,
      mostrar: false
    };
    this.sort1 = this.sort1.bind(this);
    this.sort2 = this.sort2.bind(this);
  }
  componentWillMount() {
    this.sort1(this.state.cartas1);
    this.sort2(this.state.cartas2);
    // this.baraja(this.state.cartas2);
  }
  sort1(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  sort2(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  nuevo() {
    if (this.state.carta1 && this.state.carta2 !== 0) {
      if (this.state.carta1 === this.state.carta2) {
        alert("son iguales");

        this.setState({ carta1: 0, carta2: 0 });
      } else {
        alert("son diferntes");
        this.setState({ carta1: 0, carta2: 0 });
      }
    }
  }
  handleclick(e) {
    console.log(e);
  }
  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          {this.state.cartas1.map(e => (
            <Carta
              key={e.id.toString()}
              id={e.id}
              img={e.img}
              alerta={this.handleclick}
            />
          ))}
          {this.state.cartas2.map(j => (
            <Carta key={j.id.toString()} id={j.id} img={j.img} />
          ))}
        </Grid>
        {this.nuevo()}
      </Grid>
    );
  }
}
export default Cartas;
