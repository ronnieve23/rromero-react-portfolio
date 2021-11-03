import React, { useState } from 'react';
import About from './components/About'
import './App.css'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';


function App() {
  const [sections] = useState([
    {
      name: 'About',
      component: <About/>
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
      </main>
    </div>
  );
}

export default App;
