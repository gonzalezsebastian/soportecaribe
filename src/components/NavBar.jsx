import Button from './Button';
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <div className="navbar-brand">SOPORTE</div>
                <div className="navbar-brand-2">CARIBE</div>
            </div>
            <div>
                <ul className="navbar-nav">
                    <li className='nav-item'>¿Quiénes Sómos?</li>
                    <li className='nav-item'>Clientes</li>
                    <li className='nav-item'>Cotizaciones</li>
                    <li className='nav-item'>Equipo</li>
                </ul>
            </div>
            <Button title='Contáctanos'/>
        </nav>
    );
};

export default NavBar;