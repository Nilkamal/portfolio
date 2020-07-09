import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext({
    menuOpen: false, 
    toggleMenu:() => {},
    background: '#000',
});

const MenuProvider = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [background, setBackground] = useState('#000');

    useEffect(() => {
        const background = menuOpen ? '#fec33f' : '#000';
        setBackground(background);
    },[menuOpen])
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <MenuContext.Provider value={{
            toggleMenu, 
            menuOpen,
            background
        }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;