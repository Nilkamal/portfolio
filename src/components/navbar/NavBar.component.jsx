import React, { createRef, useContext } from 'react';
import { MenuContext } from '../../providers/menu-providers/Menu-Provider';
import './navbar-styles.css';
import { Link } from 'react-router-dom';

export default () => {
    const infoRef = createRef();
    const projectsRef = createRef();
    const resumeRef = createRef();
    const { toggleMenu } = useContext(MenuContext);

    return (
        <div className="nav-bar">
            <section className='nav-links'>
                <ul>
                    <li className='animate__animated' ref={infoRef} onMouseEnter={(e) => {
                        infoRef.current.classList.toggle('animate__tada');
                    }}>
                        <Link to='/' onClick={(e) => toggleMenu(e,'links')} rel="noopener noreferrer">Info</Link>
                    </li>
                    <li className='animate__animated' ref={projectsRef} onMouseEnter={(e) => {
                        projectsRef.current.classList.toggle('animate__tada');
                    }}>
                        <Link to='/projects/' onClick={(e) => toggleMenu(e,'links')} rel="noopener noreferrer">Projects</Link>
                    </li>
                    <li className='animate__animated' ref={resumeRef} onMouseEnter={(e) => {
                        projectsRef.current.classList.toggle('animate__tada');
                    }}>
                        <Link to='/resume' onClick={(e) => toggleMenu(e,'links')}  rel="noopener noreferrer">Resume</Link>
                    </li>
                </ul>
            </section>

            <section className='social-icons'>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/Nilkamal'>
                            <i className="fa fa-github"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/nilkamal-shah/'>
                            <i className="fa fa-linkedin"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/shah.neel.73'>
                            <i className="fa fa-facebook"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/Neel_shah19'>
                            <i className="fa fa-twitter"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/neel.shah1/?hl=en'>
                            <i className="fa fa-instagram"></i> 
                        </a>
                    </li>
                    
                </ul>
            </section>
        </div>
    )
}
