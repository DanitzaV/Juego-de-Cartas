import React, { Component } from 'react';
import './Cartas.css';
import back from './../../img/espalda.png';

class Cartase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            carta1: [],
            carta2: 0,
        }
        this.id = this.props.id.toString();
        this.be = this.props.be;
        this.mos = this.props.mos

    }

    numero(e, i) {
        this.be(e, i);
    }

    render() {
        return (
            <div className="carta" onClick={() => {
                this.numero(this.id, this.props.i)
            }
            }>
                <div className="contenido">
                    <img id={this.props.i.toString()} width="100px" className="hide" src={back} />
                    <img id={this.props.i.toString()} width="100px" src={this.props.img} />
                </div>

            </div>
        )
    }
}

export default Cartase;