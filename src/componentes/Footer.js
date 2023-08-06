import './../CSS/Footer.css'
import {AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://github.com/Hydr0bius'>
                    <AiFillGithub className='redes__estilo'/>
                </a>
                <a href='https://www.instagram.com//'>
                    <AiOutlineInstagram className='redes__estilo'/>
                </a>
            </div>
            <img src='/img/Logo.png' alt='org' />
            <strong>Práctica de Alura</strong>
        </footer>
    );
}

export default Footer;