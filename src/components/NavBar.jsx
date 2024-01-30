import { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/NavBar.css';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && menuOpen) {
                setMenuOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuOpen]);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <div className="navbar-brand">SOPORTE</div>
                    <div className="navbar-brand-2">CARIBE</div>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className='nav-item'><a>¿Quiénes Sómos?</a></li>
                        <li className='nav-item'><a>Clientes</a></li>
                        <li className='nav-item'><a>Cotizaciones</a></li>
                        <li className='nav-item'><a>Equipo</a></li>
                    </ul>
                </div>
                <div className="botones">
                    <Button title='Contáctanos'/>
                </div>
                <div className="menu-bars" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </nav>
            <div className={menuOpen ? 'dropdown-menu open' : 'dropdown-menu'}>
                <li className='nav-item'><a>¿Quiénes Sómos?</a></li>
                <li className='nav-item'><a>Clientes</a></li>
                <li className='nav-item'><a>Cotizaciones</a></li>
                <li className='nav-item'><a>Equipo</a></li>
                <li className='nav-item'><Button title='Contáctanos'/></li>
            </div>
        </header>
    );
};

export default NavBar;