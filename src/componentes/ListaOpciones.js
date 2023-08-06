import React from 'react'
import './../CSS/ListaOpciones.css';

const ListaOpciones = (props) => {
    //metodo map -> arreglo.map((equipo,index)=> {return <option></option>});
    

    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value);
    }

    return (
        <div className='listaOpciones'>
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value={''} disabled defaultValue={''} hidden>Seleccionar equipo</option>
                {props.equipos.map((equipo,ListaOpciones)=>{
                    return <option key={ListaOpciones} value={equipo}> {equipo} </option>
                })}
            </select>
        </div>
    );
}
 
export default ListaOpciones;