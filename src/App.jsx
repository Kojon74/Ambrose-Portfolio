import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="app">
      <CustomNavbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
