import React, { Component } from "react";
import data from "/src/data/datos.json";
import "./Cartas.css";
class Cartas extends Component {
  constructor() {
    super();
    this.state = {
      cartas1: data.data1,
      cartas2: data.data2,
      carta1: 0,
      carta2: 0
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

  render() {
    return (
      <div>
        <ul>
          {this.state.cartas1.map(e => (
            <li className="list" key={e.id.toString()}>
              <button
                className="btnCarta"
                onClick={() => {
                  this.setState({ carta1: e.id });
                }}
              >
                <img
                  id={e.id.toString()}
                  width="50"
                  className="cartas2"
                  src={e.img}
                />
              </button>
            </li>
          ))}
        </ul>

        <ul>
          {this.state.cartas2.map(j => (
            <li className="list" key={j.id.toString()}>
              <button
                className="btnCarta"
                onClick={() => this.setState({ carta2: j.id })}
              >
                <img width="50" src={j.img} />
              </button>
            </li>
          ))}
        </ul>
        {this.nuevo()}
      </div>
    );
  }
}
export default Cartas;
