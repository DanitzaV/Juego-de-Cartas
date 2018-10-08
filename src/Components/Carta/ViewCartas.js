import React, { Component } from 'react';
import './Cartas.css';
import Carta from './Cartae';
import data from './../../data/data.json';
import shuffle from 'lodash.shuffle';
import {Grid,Hidden} from '@material-ui/core';


let datos = [];
let mas = [];
let iguales;
let puntos = 0;
class Tablero extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            carta1: [],
            carta0: '',
            carta2: '',
            mostrar: false,
        }

        datos.push(shuffle([...data, ...data]))
    }
    componentWillMount() {

        this.setState({ data: [...datos] })
    }


    handle(e, i) {
        mas.push({ e, i })
        mas.map(e => document.getElementById(e.i).style.display = 'none')


        if (mas.length > 1 && mas.length == 2) {
            console.log('aui')
            if (mas[0].e === mas[1].e) {
                puntos++
                console.log('iguales')
                mas = []
            } else {

                setTimeout(() => {
                    mas.map(e => {
                      document.getElementById(e.i).style.display = 'block'
                      mas = []; 

                    })
                },200)  
                console.log('ups')
            }

        } else {
            console.log('no')
        }
        if (puntos === 6) {
            setTimeout(() => {
                alert('felicidades ganaste')
            },400) 
            setTimeout(() => {
               
                if(window.confirm('quieres jugar de nuevo?')){
                   window.location = 'index.html'
                }
            },1000) 
           
            
           
        }
        console.log(mas)
        console.log(puntos)
    }


    render() {



        return (
            <Grid container justify={"center"} style={{padding: '2px',height: '100vh'}} >
               <Hidden only={['lg','md','sm','xl']}>
               <div className="contenidoxs">
                {

                    this.state.data[0].map((cartas, index) => {
                        return(
                            <Grid item xs={4} className="cont">
                            <Carta key={index} mos={mas} show={this.state.mostrar} id={cartas.id} i={index.toString()} img={cartas.img} be={this.handle} > </Carta>
                            </Grid>
                        )
                    } )

                }

            </div>
               </Hidden>
               <Hidden only={['xs']}>
               <div className="contenedor">
                {

                    this.state.data[0].map((cartas, index) => {
                        return(
                            <Grid item sm={4} md={3} >
                            <Carta key={index} mos={mas} show={this.state.mostrar} id={cartas.id} i={index.toString()} img={cartas.img} be={this.handle} > </Carta>
                            </Grid>
                        )
                    } )

                }

            </div>

               </Hidden>
               
            </Grid>
            
        )
    }
}
export default Tablero;