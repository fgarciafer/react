import React, { Component } from 'react';
import { observer } from 'mobx-react'
import VarListaData from './ListaData';

class Lista extends Component{

    enviarTarea(evento){
        if(evento.which === 13){
            VarListaData.agregarTarea(evento.target.value);
            evento.target.value='';
        }
    }

    render(){
        let listaDiv = [];

        const agregarDiv = VarListaData.tareas.forEach((value,index)=>{
            listaDiv.push(<li key={index} onClick={function(){VarListaData.eliminarTarea(index)}}>{value}</li>)
        });

        return (
            <div>
                <h2>Lista</h2>
                <input onKeyPress={this.enviarTarea.bind(this)}/>
                <div>
                    <div>
                        <ul>
                            {listaDiv}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Lista);