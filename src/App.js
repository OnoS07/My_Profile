import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Top from './components/Top.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Top />
        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;