import React from 'react';
import Navigation from './components/Nav'
import About from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div>
      <main>
          <Navigation></Navigation>
          <About></About>
      </main>
    </div>
  );
}

export default App;
