import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextConverter from './components/TextConverter';

function App() {
  return (
    <>
      <Navbar title="Mark2xcode" Home="Home" About="About" Dropdown="Text Tools" op1="Text Converter" />

          <TextConverter Head01="Enter your text"/>
        
        <About h2="About US"/>
     
    </>
  );
}

export default App;
