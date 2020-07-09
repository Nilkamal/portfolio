import React, { useContext } from 'react';
import { MenuContext } from '../../providers/menu-providers/Menu-Provider';
import logo from '../../logo.png';
import './menu-styles.css';

export default () => {
    const { toggleMenu, menuOpen } = useContext(MenuContext);
    console.log(MenuContext);
    return ( 
        <div className='menu'>
            <img src={logo} alt="Logo" height="100"/>
        
            <div className={`container  ${menuOpen && 'change'}`} onClick={toggleMenu}>
                <div className = 'bar1'></div> 
                <div className = 'bar2'></div> 
                <div className = 'bar3'></div> 
            </div>
        </div>
    );
};