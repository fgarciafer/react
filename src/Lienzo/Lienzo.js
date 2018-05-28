import React, { Component } from 'react';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import Pedidos from './Pedidos';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Lienzo extends Component {
    render(){
        return(
            <div className='container'>
                <div className='jumbotron'>
                    <h2>Nombre de tienda</h2>
                </div>
                    <div>
                        <div>
                            <Link to="/platillos">Platillos</Link>
                            <Link to="/bebidas">Bebidas</Link>
                        </div>
                        <div>
                            <Route path="/bebidas" component={Bebidas}/>
                            <Route path="/platillos" component={Platillos}/>
                        </div>
                    </div>
                <Pedidos/>
            </div>
        )
    }
}

export default Lienzo;