import React from 'react';
import styled from 'styled-components';
import './homepage-style.css';

const HomeContainer = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default () => {
    return (
        <HomeContainer>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Nilkamal Shah</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Full Stack Software Engineer</h6>
                    <p class="card-text">
                        I am software engineer at <em>Publicis Sapient</em> Since Oct, 2019. I am currently loving working with react as eco system and solve interesting challenges.
                        I am currently working with:
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
                    </p>
                    <p>(M)<a href="tel: +91 9913741838">+91 991341818</a></p>
                    <p>(E) <a href="mailto: nilkamalsha75@gmail.com">Nilkamalsha75@gmail.com</a></p>
                    <a href="https://www.github.com/Nilkamal" target="_blank" class="card-link">View On GitHub</a>
                </div>
            </div>
        </HomeContainer>
    )
}