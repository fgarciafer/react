import React, { Component } from 'react';
import VarTiendaController from './TiendaController';
import { observer } from 'mobx-react'

class Pedidos extends Component {
    render(){
        let platillosPedido = [];
        let bebidasPedido =[];

        const llenarPlatillosPedido = VarTiendaController.platillos.forEach((value,index) => {
            if(value.cantidad > 0){
                    platillosPedido.push(
                    <div className='list-group-item' key={index}>
                        <div className='panel-body'>
                            <h4>{value.name}</h4><br/>
                            <div className='APrecioCantidad'>
                                <span>Cantidad: {value.cantidad}</span>
                                <span className='PrecioPlatillo'>Precio: {value.cantidad*value.precio}</span> 
                            </div>
                        </div>
                    </div>
                )   
            }
        });

        const llenarBebidasPedido = VarTiendaController.bebidas.forEach((value,index) => {
            if(value.cantidad > 0){
                    bebidasPedido.push(
                    <div className='list-group-item' key={index}>
                        <div className='panel-body'>
                            <h4>{value.name}</h4><br/>
                            <div className='APrecioCantidad'>
                                <span>Cantidad: {value.cantidad}</span>
                                <span className='PrecioPlatillo'>Precio: {value.cantidad*value.precio}</span> 
                            </div>
                        </div>
                    </div>
                )   
            }
        });

        return (
            <div className='container col-md-6'>
                <div>
                    <div className='panel panel-primary'>
                        <div className='list-group Pedidos-Menu'>
                            {platillosPedido}
                            {bebidasPedido}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Pedidos);