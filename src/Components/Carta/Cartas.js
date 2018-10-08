import React , { Component } from 'react';
import './Cartas.css';
class Cartas extends Component{
    constructor(props){
        super(props);
        this.state = {
            mostrar: false,
            carta1: [],
            carta2: 0,
        }
        this.id = this.props.id;
        this.be = this.props.be;
    }
    componentDidMount(){
        
    }

    numero(e){

        this.be(e);
      
        
}
  
    render(){
      
    
        return(
            <div className="carta" onClick={()=> {
               
                this.numero(this.id)
                
                }
                }>
                    <div className="contenido">
                        {

                        this.props.mos ?  <img width="100px" src={this.props.img}/> : null
                        }
                        {/* <img width="100px" src={this.props.img}/> */}
                    </div>
               
            </div>
        )
    }
}

export default Cartas;