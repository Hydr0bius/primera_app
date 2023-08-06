import { useState } from 'react';
import React from 'react'
import './../CSS/CampoTexto.css'

const CampoTexto = (props) => {

    //destructuracion
    const {type="text"} = props;

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value);
    }
    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    );
}
 
export default CampoTexto;