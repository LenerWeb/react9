import logo1 from "./garra.svg.png";
import './Nav.css';

function Header () {
    return(
        <header className='header'>
            <nav>
                <span>
                    <img src={logo1} className="logo1" alt="logo"/>
                </span>
                <ul>
                    <li>
                        Inicio
                    </li>
                    <li>
                        Nosotros
                    </li>
                    <li>
                        Portafolio
                    </li>
                    <li>
                        Contacto
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
