import React from 'react';
import './projects-styles.css';

export default () => {
    return (
        <div className='projects'>
            <div className='project-list'>
                <h1 className='main-title'>Projects</h1>
                <div className='project'>
                    <ul>
                        <li>
                            <h2><em>Verizon Wireless</em></h2>
                            <div className='description'>
                                <span>
                                    It allows customer to visit application on any platform like mobile, tablet and website.
                                    It helps customer to seemlessly placed order and have it delivered in store or home delivery.
                                </span>
                            </div>
                            <div className='links'>
                                <a href="https://www.verizon.com">Take me there</a>
                            </div>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}