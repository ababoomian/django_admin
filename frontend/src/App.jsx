import './App.css';
import React from 'react';
import {Container, MainBody} from './Styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import  Theme  from './utils/Theme';
import Showcase from './components/Showcase';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={Theme}>
     <MainBody>
      <Navbar/>
      <Container>
        <Showcase /> 
        <Skills/>
        <MyProjects/>
        <Footer/>
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
