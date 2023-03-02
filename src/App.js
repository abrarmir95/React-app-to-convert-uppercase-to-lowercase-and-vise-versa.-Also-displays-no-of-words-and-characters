// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="TextUtils" about="AboutTextUtils" home="Home"/>

    <div className="textarea" >
    <Textform heading="Enter the text here to analyze:"/>
    </div>
    </>
  );
}

export default App;
