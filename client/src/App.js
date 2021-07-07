import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom' 
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './containers/Home'
import NavBar from './components/Navbar'
import Signup from './components/Signup';


function App(props) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const history = useHistory()

// in order to keep user
  useEffect(() => {
    const headers = {}
    fetch('/me')
    .then(res => { if (res.ok) { res.json() 
        .then(user => {
          setLoggedIn(true)
          setUser(user)
        })
      }
    })
  }, [])

  const userLogin = (user) => {
    setLoggedIn(true)
    setUser(user)
    history.push('/')
  }
// Log out user and set logged in to false, reset set user as well
  const userLogout = () => {
    const headersConfig = () => { method: 'DELETE' }
    fetch('/logout', headersConfig)
    .then(() => {
      setLoggedIn(false)
      setUser({})
    })
    historu.push('/')
  }

  return (
    <div className="App">
      <NavBar user={user} loggedIn={loggedIn}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup'  render={routerProps => <Signup {...routerProps} userLogin={userLogin}/>}/>
      </Switch>
    </div>
  );
}

export default App;
