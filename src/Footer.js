import './Footer.css';

const Footer = () => {
    return (
    <div>
        <ul className='Footer-info'>
            <ul className="Footer-list"> 
                <h3>Contáctanos</h3>
                <li>Av. Rasmon Castilla 844</li>
                <li>huellitas@gmail.com</li>
            </ul>
            <ul className="Footer-list"><h3>Servicios</h3>
                <li>Desparacitacion</li>
                <li>Veterianaria</li>
                <li>Baños</li>
            </ul>
            <ul className="Footer-list"><h3>Legal</h3>
                <li>Politica de privacidad</li>
                <li>Terminos y condiciones</li>
                <li>Blog</li>
            </ul>
        </ul>
        <h1>Este es mi componente en Footer</h1>
    </div>
        
    )
}

export default Footer;