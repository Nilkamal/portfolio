import React from 'react';
import './navbar-styles.css'
export default () => {
    return (
        <div className="nav-bar">
            <section className='nav-links'>
                <ul>
                    <li>
                        <a href='/info' rel="noopener noreferrer">Info</a>
                    </li>
                    <li>
                        <a href='/projects/' rel="noopener noreferrer">Projects</a>
                    </li>
                    <li>
                        <a href='/resume' rel="noopener noreferrer">Resume</a>
                    </li>
                </ul>
            </section>

            <section className='social-icons'>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/Nilkamal'>
                            <i class="fa fa-github"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/nilkamal-shah/'>
                            <i class="fa fa-linkedin"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/shah.neel.73'>
                            <i class="fa fa-facebook"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/Neel_shah19'>
                            <i class="fa fa-twitter"></i> 
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/neel.shah1/?hl=en'>
                            <i class="fa fa-instagram"></i> 
                        </a>
                    </li>
                    
                </ul>
            </section>
        </div>
    )
}