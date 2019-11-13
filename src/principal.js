import React, {Component} from 'react';
import VarPrincipalData from './principalData';
import { observer } from 'mobx-react';
import MasUno from './masUno';

class Principal extends Component{
    render(){
        return(
            <div>
                <h2>Saludos desde Principal</h2>
                <h2>{VarPrincipalData.numero}</h2>
                <MasUno/>
            </div>
        );
    }
}

export default observer(Principal);