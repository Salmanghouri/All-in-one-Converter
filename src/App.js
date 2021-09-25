import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextConverter from './components/TextConverter';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './components/Home';

function App() {
  //Modes Function
  const [mode, setMode] = useState('dark');
  //function mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'

    }
  }

  return (
    <>


      <Router>

      <Navbar title="Mark2xcode" Home="Home" About="About" Dropdown="Text Tools" op1="Text Converter" mode={mode} toggleMode={toggleMode} />
    <Home/>
      <Switch>
        <Route path="/about">
        <About h2="About US" />
        </Route>

        <Route path="/op1">
        <TextConverter Head01="Enter your text" mode={mode} />
          
        </Route>
      </Switch>
      </Router>

    </>
  );
}

export default App;
