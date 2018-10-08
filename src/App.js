import React, { Component } from 'react';
import './App.css';
import Move from './Move';
class App extends Component {
  render() {
    return (
      <div >
        {this.props.children}
        {/* <Move/> */}
      </div>
    );
  }
}

export default App;
