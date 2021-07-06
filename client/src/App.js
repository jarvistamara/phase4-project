import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom' 
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './containers/Home'
import NavBar from './components/Navbar'


function App() {
  const [logged_In, setLogged_In] = useState(false)
  const [user, setUser] = useState({})
  // const history = useHistory()

  











  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
