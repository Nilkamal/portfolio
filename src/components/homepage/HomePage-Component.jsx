import React from 'react';
import styled from 'styled-components';
import './homepage-style.css';

const HomeContainer = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
export default () => {
    return (
        <HomeContainer>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Nilkamal Shah</div>
                    <div className="card-subtitle mb-2 text-muted">Full Stack Software Engineer</div>
                    <div className="card-text">
                    <p className='card-text'>
                        I am software engineer at <em>Publicis Sapient</em> Since Oct, 2019. I am currently loving working with react as eco system and solve interesting challenges.
                        I am currently working with:</p>
                        <h3 style={{marginTop: '1rem'}}>Technologies</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>Context API</li>
                            <li>React Hooks</li>
                            <li>React Redux</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>
                    <p>(M)<a href="tel: +91 9913741838">+91 991341818</a></p>
                    <p>(E) <a href="mailto: nilkamalsha75@gmail.com">Nilkamalsha75@gmail.com</a></p>
                    <a href="https://www.github.com/Nilkamal" target="_blank" rel="noopener noreferrer" className="card-link">View On GitHub</a>
                </div>
            </div>
        </HomeContainer>
    )
}
