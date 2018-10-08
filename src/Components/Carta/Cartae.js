import React , { Component } from 'react';
import './Cartas.css';
import back from './../../img/espalda.png';
import Cartas from './Cartas';
class Cartase extends Component{
    constructor(props){
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
    componentDidMount(){
        
    }

    numero(e,i){

        this.be(e,i);
        
        
}

  
    render(){
      
    
        return(
            <div className="carta" onClick={()=> {
                this.numero(this.id,this.props.i)   
               
                }
                }>
                    <div className="contenido">
                        
                            <img id={this.props.i.toString()} width="100px" className="hide" src={back}></img>
                            <img id={this.props.i.toString()}  width="100px" src={this.props.img}></img> 
                        
                    </div>
              
            </div>
        )
    }
}

export default Cartase;