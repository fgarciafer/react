import { extendObservable } from 'mobx';

class TiendaController {
    constructor(){
        extendObservable(this,
            {
                platillos: [
                    {nombre: 'nombrePlatillo1', descripcion: 'platillo muy rico1', precio: 100, cantidad: 0},
                    {nombre: 'nombrePlatillo2', descripcion: 'platillo muy rico2', precio: 200, cantidad: 0},
                    {nombre: 'nombrePlatillo3', descripcion: 'platillo muy rico3', precio: 300, cantidad: 0}
                    ],
                bebidas: [
                    {nombre: 'bebidaNumero1', descripcion: 'bebida fresca1', precio: 10, cantidad: 0},
                    {nombre: 'bebidaNumero2', descripcion: 'bebida fresca2', precio: 13, cantidad: 0},
                    {nombre: 'bebidaNumero3', descripcion: 'bebida fresca3', precio: 16, cantidad: 0},
                ]
            });

    }

    ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
        this.platillos.forEach((value, index) => {
                if(indicePlatillo === index){
                    this.platillos[index].cantidad = cantidadPlatillo;
                }
            }
        )
    }

    bebidasEnLaOrden(indiceBebida, cantidadBebida){
        this.bebidas.forEach((value,index)=>{
            if(indiceBebida === index){
                this.bebidas[index].cantidad = cantidadBebida;
            }
        })
    }
}

var VarTiendaController = new TiendaController;
export default VarTiendaController;