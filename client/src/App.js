import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom' 
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './containers/Home'
import NavBar from './components/Navbar'
import Signup from './components/Signup';


function App(props) {
  const [logged_In, setLogged_In] = useState(false)
  const [user, setUser] = useState({})
  const history = useHistory()

  const userLogin = (u) => {
    setLogged_In(true)
    setUser(u)
    history.push('/')
  }

  return (
    <div className="App">
      <NavBar user={user} logged_In={logged_In}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup'  render={routerProps => <Signup {...routerProps} userLogin={userLogin}/>}/>
      </Switch>
    </div>
  );
}

export default App;
