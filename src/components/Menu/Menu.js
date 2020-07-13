import React, { useContext } from 'react';
import { MenuContext } from '../../providers/menu-providers/Menu-Provider';
import logo from '../../logo.png';
import './menu-styles.css';

export default () => {
    const { toggleMenu, menuOpen, goHome } = useContext(MenuContext);
    return ( 
        <div className='menu'>
            <div className='container'>
                <nav className='navigation'>
                    <img src={logo} alt="Logo" height="100" onClick={goHome} />

                    <div className={`${menuOpen ? 'open' : ''}`} style={{padding: '2rem'}} onClick={toggleMenu}>
                        <i className="icon-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </i>
                    </div>
                </nav>
            </div>
        </div>
    );
};