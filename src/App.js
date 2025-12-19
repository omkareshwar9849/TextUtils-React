import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import HelpPage from './components/HelpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const togglePMode = () => {
    setMode("purple");
    document.body.style.backgroundColor = '#a98eda';
    showAlert("Purple mode has been enabled", "success");
  }

  const toggleLMode = () => {
    setMode("light");
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }

  const toggleDMode = () => {
    setMode("dark");
    document.body.style.backgroundColor = '#212529';
    showAlert("Dark mode has been enabled", "success");
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleDMode={toggleDMode} toggleLMode={toggleLMode} togglePMode={togglePMode} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Alert alert={alert} mode={mode} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} toggleDMode={toggleDMode} toggleLMode={toggleLMode} togglePMode={togglePMode} />
            </Route>

            <Route exact path="/help">
              <HelpPage mode={mode} />
            </Route>

            <Route exact path="/TextUtils-React">
              <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter,
          Remove Extra Spaces and Many more.." mode={mode} toggleDMode={toggleDMode} toggleLMode={toggleLMode} togglePMode={togglePMode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
