import React, { Component } from "react";
import "./Cartas.css";
class Cartas extends Component {
  constructor() {
    super();
    this.state = {
      cartas1: [1, 2, 3, 4, 5, 6],
      cartas2: [6, 5, 2, 3, 1, 4],
      carta1: 0,
      carta2: 0
    };
    this.sort1 = this.sort1.bind(this);
    this.sort2 = this.sort2.bind(this);
    this.mostrar = this.mostrar.bind(this);
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
  mostrar(e, o) {
    console.log(e);
  }
  handleClick(e) {
    this.setState();
    alert(e);
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
            <li value={e.toString()} key={e.toString()}>
              <button onClick={() => this.setState({ carta1: e })}>{e}</button>
            </li>
          ))}
        </ul>

        <ul>
          {this.state.cartas2.map(j => (
            <li key={j.toString()}>
              <button onClick={() => this.setState({ carta2: j })}>{j}</button>
            </li>
          ))}
        </ul>
        {this.nuevo()}
      </div>
    );
  }
}
export default Cartas;
