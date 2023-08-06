import { useState } from 'react';
import React from 'react'
import './../CSS/Formulario.css';
import CampoTexto from './CampoTexto';
import ListaOpciones from './ListaOpciones';
import Boton from './Boton';

const Formulario = (props) => {

    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [foto, setFoto] = useState('');
    const [equipo, setEquipo] = useState('');
    const [titulo, setTitulo] = useState('');
    const [color, setColor] = useState('');

    //destructuracion
    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('manejar Envio');
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo,
        };
        registrarColaborador(datosAEnviar);
    };

    const manjearNuevoEnvio = (e) =>{
        e.preventDefault();
        crearEquipo({titulo,colorPrimario:color});
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio} action="">
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo='Nombre' 
                placeholder='Ingresar nombre' 
                required 
                valor={nombre} 
                actualizarValor={setNombre}
            />

            <CampoTexto 
                titulo='Puesto'
                placeholder='Ingresar puesto' 
                required 
                valor={puesto} 
                actualizarValor={setPuesto} 
            />
            
            <CampoTexto 
                titulo='Foto' 
                placeholder='Ingresar foto' 
                required 
                valor={foto} 
                actualizarValor={setFoto}
            />

            <ListaOpciones
                valor={equipo}
                actualizarEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton texto='crear' />
            </form>

            <form onSubmit={manjearNuevoEnvio} action="">
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo='Titulo' 
                placeholder='Ingresar titulo' 
                required 
                valor={titulo} 
                actualizarValor={setTitulo}
            />

            <CampoTexto 
                titulo='Color'
                placeholder='Ingresar el color Hex.' 
                required 
                valor={color} 
                actualizarValor={setColor}
                type = "color"
            />
            <Boton texto='Registrar equipo' />
            </form>
        </section>
    );
}
 
export default Formulario;