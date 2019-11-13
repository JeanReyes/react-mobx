import React, { Component } from 'react';
import VarPrincipalData from './principalData';

class MasUno extends Component{
    render(){
        return(
            <button onClick = {function() {VarPrincipalData.aumentarNumero()}}>Aumentar</button>
        );
    }
}

export default MasUno;