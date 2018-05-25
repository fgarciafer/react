import { extendObservable } from 'mobx';

class ListaData {
    constructor(){
        extendObservable(this,
        {tareas: ['Aprender React', 'Hacer una app con React']});
    }

    agregarTarea(tarea){
        this.tareas.push(tarea);
    }
    eliminarTarea(index){
        this.tareas.splice(index, 1);

    }
}

var VarListaData = new ListaData;
export default VarListaData;