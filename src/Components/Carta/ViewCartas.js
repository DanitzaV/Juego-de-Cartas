import React , {Component} from 'react';
import './Cartas.css';
import Carta from './Cartae';
import data from './../../data/data.json';
import shuffle from 'lodash.shuffle';


let  datos = [];
let mas = [];
let iguales;

class Tablero extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            carta1: [],
            carta0: '',
            carta2: '',
            mostrar: false,
        }
      
        datos.push(shuffle([...data,...data]))
    }
    componentWillMount(){

        this.setState({data: [...datos]})
    }

    
    handle(e,i){
        mas.push({e,i})
        document.getElementById(this.props.i).style.display = 'none'; 
    if( mas.length > 1 && mas.length == 2){
       
        console.log('aui')
        
        if(mas[0].e === mas[1].e){
            
            console.log('iguales')
        mas = []
        }else {
            // setTimeout(() => {
            //     mas = []
            // },1000)
            
            mas.map(e => document.getElementById(e.i).style.display = 'block'  )
            document.getElementById(mas[0].i).style.display = 'block'
            document.getElementById(mas[1].i).style.display = 'block'
            console.log('ups')
           
        }
       
       
    }else{
        console.log('no')
    }
    console.log(mas)
}

   
    render(){
       
        
       
        return(
            <div className="contenedor">
                {
                    
                    this.state.data[0].map((cartas, index) => <Carta key={index} mos={mas} show={this.state.mostrar} id={cartas.id} i={index.toString()} img={cartas.img} be={this.handle} > </Carta>)
                    
                }
            
            </div>
        )
    }
}
export default Tablero;