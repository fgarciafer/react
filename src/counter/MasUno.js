import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

export default class MasUno extends Component{
    render(){
        return(
            <button onClick={function (){VarPrincipalData.aumentarNumero()}}>Aumentar</button>
        )
    }
}