// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Color from './components/Color';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Counter from './components/Counter';
import { useState } from 'react';



function App() {
  const [mode, setMode]= useState('light')
const [colorHandler, setColorHandler]= useState('dark')
const [labelHandler, setLabelHandler]= useState('Enable DarkMode')
const [areacolorHandler, settextAreacolorHandler]= useState('light')
const [formColorr, setformColorr]= useState('dark')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setColorHandler('white')
      setLabelHandler('Disable DarkMode')
      document.body.style.backgroundColor='grey'
      settextAreacolorHandler('secondary')
      setformColorr('light')

    }
    else{
      setMode('light')
      setColorHandler('dark')
      setLabelHandler('Enable DarkMode')
      document.body.style.backgroundColor='white'
      settextAreacolorHandler('light')
      setformColorr('dark')

    }


  }
  return (
    <>
    <Navbar title="TextUtils" about="AboutTextUtils" home="Home" Mode={mode} toggler={toggleMode} color={colorHandler} label={labelHandler}/>

    <div className="textarea" >
    <Textform heading="Enter the text here to analyze:" areaColor={areacolorHandler} formColor={formColorr}/>
    </div> 
    {/* <About/> */}
    {/* <Color/>
    <Counter/> */}
    </>
  );
}

export default App;
