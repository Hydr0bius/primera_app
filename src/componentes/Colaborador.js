import './../CSS/Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = (props) => {
    //destructuracion
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props
    return (
        <div className='colaborador'>
            <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className='eliminar' />
            <div style={{ backgroundColor: colorPrimario }} className='encabezado'>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                <h5>{equipo}</h5>
                {fav === true ?
                    <AiFillHeart color='red' onClick={() => like(id)} />
                    : <AiOutlineHeart onClick={() => like(id)} />}
            </div>
        </div>
    );
}

export default Colaborador;