import React, { Component } from "react";
import data from "/src/data/datos.json";
import { Grid } from "@material-ui/core";
import "./Cartas.css";
class Cartas extends Component {
  constructor() {
    super();
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
    this.handleclick = this.handleclick.bind(this);
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
  handleclick(e) {
    console.log(e);
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

  render() {
    return (
      <div>
        <Grid item>
          {this.state.cartas1.map(e => (
            <button
              key={e.id.toString()}
              className="btnCarta"
              onClick={() => {
                this.setState({ carta1: e.id, mostrar: true });
              }}
            >
              <img
                id={e.id.toString()}
                width="50"
                className="cartas2"
                src={e.img}
              />
            </button>
          ))}
          {this.state.cartas2.map(j => (
            <button
              key={j.id.toString()}
              className="btnCarta"
              onClick={() => this.setState({ carta2: j.id })}
            >
              <img width="50" src={j.img} />
            </button>
          ))}
        </Grid>
        {this.nuevo()}
      </div>
    );
  }
}
export default Cartas;
