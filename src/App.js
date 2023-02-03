import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#363a3e';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled","success");
      
    }
    
  }

  return (
    <>

    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Router>
            <Switch>
              <Route exact path="/"><TextForm/></Route>
              <Route exact path="/about"/><About/></Switch>
            
    </Router> */}


    
    {/* <About></About> */}
    </div>
   
    </>
  );
}

export default App;
