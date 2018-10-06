import React, { Component } from "react";

class Cartas extends Component {
  constructor() {
    super();
    this.state = {
      cartas1: [1, 2, 3, 4, 5, 6],
      cartas2: [6, 5, 2, 3, 1, 4]
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
  render() {
    return (
      <div>
        <ul>{this.state.cartas1.map(e => <li key={e.toString()}>{e}</li>)}</ul>
        <ul>{this.state.cartas2.map(j => <li key={j.toString()}>{j}</li>)}</ul>
      </div>
    );
  }
}
export default Cartas;
