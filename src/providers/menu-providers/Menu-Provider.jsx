import React, { createContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
export const MenuContext = createContext({
    menuOpen: false, 
    toggleMenu:() => {},
    goHome: () => {},
    linkClicked: () => {},
    background: '#000',
    
});

const MenuProvider = ({children, history}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            history.push('/menu');
        } 
    },[menuOpen, history])

    const toggleMenu = (e, from = 'menu') => {
        setMenuOpen(!menuOpen)
        if(from === 'menu' && menuOpen) {
            history.push('/');
        }
    }

    const goHome = () => {
        history.push('/');
    }
  
    return (
        <MenuContext.Provider value={{
            toggleMenu, 
            menuOpen, 
            goHome
        }}>
            {children}
        </MenuContext.Provider>
    )
}

export default withRouter(MenuProvider);