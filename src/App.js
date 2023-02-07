import React from 'react';
import './App.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {

  return (
    <>

        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />

    </>
  )
}

export default App
