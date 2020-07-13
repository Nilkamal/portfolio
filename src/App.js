import React from 'react';
import Menu from './components/Menu/Menu';
import MenuProvider from './providers/menu-providers/Menu-Provider';
import styled from 'styled-components';
import HomePage from './components/homepage/HomePage-Component';
import NavBar from './components/navbar/NavBar.component';
import { Route } from 'react-router-dom';
import 'animate.css'; 
import Projects from './components/projects/projects-component';
import CompanyProfileContainer from './components/company-profile/company-container-component';
import CompanyDetail from './components/company-profile/company-detail-component';

const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    position: relative;
    height: 100%;
    margin: auto;
    overflow: hidden;
`;

function App() {
  return (
    <MenuProvider>
      <Container>
          <Menu />
          <Route exact path='/' component={HomePage} />
          <Route path='/menu' component={NavBar} />
          <Route path='/projects' component={Projects} />
          <Route path='/company-profile' component={CompanyProfileContainer} />
          <Route path='/company-detail/:company_name' component={CompanyDetail} />

      </Container>
  </MenuProvider>
  );
}

export default App;
