import React, { createContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
export const MenuContext = createContext({
    menuOpen: false, 
    toggleMenu:() => {},
    goHome: () => {},
    background: '#000',
    
});

const MenuProvider = ({children, history}) => {
    const [menuOpen, setMenuOpen] = useState(false);
   
    useEffect(() => {
        if (menuOpen) {
            history.push('/menu');
        } else {
            history.push('/');
        }
    },[menuOpen, history])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
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