import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import Banniere from './components/Banniere';
import Titre from './components/Titre';
import Hero from './components/Hero';
import Partage from './components/Partage';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Commentaire from './components/Commentaire';

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <Container className="App">
      <Header/>
      <Banniere/>
      <Titre/>
      <Hero/>
      <Partage/>
      <Intro/>
      <Footer/>
      <Commentaire/>
    </Container>
  );
}

export default App;
