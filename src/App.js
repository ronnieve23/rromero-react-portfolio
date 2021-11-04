import React, { useState } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About'
import Portfolio from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [sections] = useState([
    {
      name: 'About',
      component: <About/>
    },
    {
      name:'Portfolio',
      component: <Portfolio/>
    },
    {
      name:'Contact',
      component: <Contact/>
    }
    
  ]);
const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <main>
          <Header
          sections={sections}
          setCurrentSection = {setCurrentSection}>
          </Header>
          {currentSection.component}
          <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
