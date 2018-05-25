import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

export default class MenosUno extends Component{
    render(){
        return(
            <button onClick={function (){VarPrincipalData.disminuirNumero()}}>Disminuir</button>
        )
    }
}