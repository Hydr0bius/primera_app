import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, ActualizarColaboradores] = useState([{
    id:uuid(),
    nombre: 'undefined',
    puesto: 'undefined',
    foto: 'https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-580x580.jpg',
    equipo: 'Develop',
    fav:true,
  }]);

  const [equipos,setEquipos] = useState(
    [
      {
        id: uuid(),
        titulo: 'Programación',
        colorPrimario: '#57c278',
        colorSecundario: '#d9f7e9'
      },
      {
        id: uuid(),
        titulo: 'Front End',
        colorPrimario: '#82cffa',
        colorSecundario: '#e8f8ff'
      },
      {
        id: uuid(),
        titulo: 'Data Science',
        colorPrimario: '#a6d157',
        colorSecundario: '#fdf8e2'
      },
      {
        id: uuid(),
        titulo: 'Develop',
        colorPrimario: '#ed6b69',
        colorSecundario: '#fde7e8'
      },
      {
        id: uuid(),
        titulo: 'UX y Diseño',
        colorPrimario: '#db6ebf',
        colorSecundario: '#fae9f5'
      },
      {
        id: uuid(),
        titulo: 'Móvil',
        colorPrimario: '#ffba05',
        colorSecundario: '#fff5d9'
      },
      {
        id: uuid(),
        titulo: 'Innovación y Gestión',
        colorPrimario: '#ff8a29',
        colorSecundario: '#ffeedf'
      },
    ]
  );

  const cambiarMostrar = () => { actualizarMostrar(!mostrarFormulario) };

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador);
    //spread operator
    ActualizarColaboradores([...colaboradores, colaborador]);
  };

  //eliminar colaborador
  const eliminarColaborador = (id) => {
    //console.log('eliminando', id);
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id);
    ActualizarColaboradores(nuevosColaboradores);
  };
  
  //actualizar color de equipo
  const actualizarColor = (color,id)=>{
    console.log(`actualizar: ${color} ${id}`);
    const equipoActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equipoActualizados);
  };

  //crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    setEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
  }

  //cambiar el estado del corazon
  const like = (id)=>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    ActualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header />
      {
        mostrarFormulario ?
          <Formulario
            equipos={equipos.map((e) => e.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
          : <></>
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((e) => <Equipo
          datos={e}
          key={e.titulo}
          colaboradores={colaboradores.filter(
            colaboradores => colaboradores.equipo === e.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor= {actualizarColor}
          like={like}
        />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
