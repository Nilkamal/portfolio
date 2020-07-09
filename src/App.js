import React from 'react';
import Menu from './components/Menu/Menu';
import MenuProvider from './providers/menu-providers/Menu-Provider';
import styled from 'styled-components';
import HomePage from './components/homepage/HomePage-Component';
import { Route } from 'react-router-dom';

const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    min-height: 100vh;
`;

function App() {
  return (
    <MenuProvider>
      <Container>
          <Menu />

          <Route path='/' component={HomePage} />
      </Container>
  </MenuProvider>
  );
}

export default App;
