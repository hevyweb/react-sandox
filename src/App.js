import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Maincontent from './components/Maincontent'

function App() {
  return (
    <div className="App">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
