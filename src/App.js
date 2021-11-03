import React, { useState } from 'react';
import './App.css'
import About from './components/About'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactMe from './components/Contact';

function App() {
  const [pages] = useState([
    {
      name: 'About',
      component: <About/>
    },
    {
      name:'Contact',
      component: <ContactMe/>
    }
  ]);
const [currentSection, setCurrentSection] = useState(pages[0]);
const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
     <main>
        {!contactSelected ? (
          <>
          <Header
          pages={pages}
          setCurrentSection = {setCurrentSection}
          contactSelected={contactSelected}
          setContactSelected = {setContactSelected}>
          </Header>
          {currentSection.component}
          <About></About>
          </>
        ) : (
          <ContactMe></ContactMe>
        )}
      </main>
    </div>
  );
}





export default App;
