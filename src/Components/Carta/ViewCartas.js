import React , {Component} from 'react';
import './Cartas.css';
import Carta from './Cartae';
import data from './../../data/data.json';
import shuffle from 'lodash.shuffle';


let  datos = [];
let mas = [];
let iguales;
let puntos = 0;
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
        mas.map(e =>document.getElementById(e.i).style.display = 'none' )
  
       
    if( mas.length > 1 && mas.length == 2){
     
        console.log('aui')
        
        if(mas[0].e === mas[1].e){
            puntos++
            console.log('iguales')
        mas = []
        }else {
           
            setTimeout(() => {
                mas.map(e =>
                    {
                        document.getElementById(e.i).style.display = 'block'
                        mas = [];
                    }  )
               },1000)
           
          
            console.log('ups')
           
        }
       
       
    }else{
        console.log('no')
    }
    if(puntos == 6) {
        alert('felicidades ganaste')
    }
       console.log(mas)
    console.log(puntos)
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