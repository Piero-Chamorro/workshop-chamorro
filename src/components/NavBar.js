import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiRockGolem } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        <GiRockGolem className='navbar-icon' />
                        MOONROCK
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={'nav-item'}>
                            <Link to='/' className='nav-links'>
                                Inicio
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to='/' className='nav-links'>
                                Servicios
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to='/' className='nav-links'>
                                Productos
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to='/' className='nav-links'>
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to='/' className='nav-links'>
                                Contáctanos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;
