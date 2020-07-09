import React from 'react';
import Menu from './components/Menu/Menu';
import MenuProvider from './providers/menu-providers/Menu-Provider';
import styled from 'styled-components';
import HomePage from './components/homepage/HomePage-Component';
import NavBar from './components/navbar/NavBar.component';
import { Route } from 'react-router-dom';

const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: auto;
    overflow-y: hidden;
`;

function App() {
  return (
    <MenuProvider>
      <Container>
          <Menu />
          <Route path='/menu' component={NavBar} />
          <Route exact path='/' component={HomePage} />
          
      </Container>
  </MenuProvider>
  );
}

export default App;
