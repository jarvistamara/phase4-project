import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom' 
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './containers/Home'
import NavBar from './components/Navbar'
import Signup from './components/Signup';
import Login from './components/Login';
import Books from './containers/Books';


function App(props) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const history = useHistory()

// in order to keep user
  useEffect(() => {
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
    fetch('/logout', { method: 'DELETE' })
    .then(() => {
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }

  return (
    <div className="App">
      <NavBar user={user} loggedIn={loggedIn} userLogout={userLogout}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup'  render={routerProps => <Signup {...routerProps} userLogin={userLogin}/>}/>
        <Route exact path='/login'  render={routerProps => <Login {...routerProps} userLogin={userLogin}/>}/>
        <Route exact path='/books'  render={routerProps => <Books {...routerProps} user={user} loggedIn={loggedIn} userLogin={userLogin}/>}/>
      </Switch>
    </div>
  );
}

export default App;
