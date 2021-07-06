import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import './App.css';
import Home from './containers/Home'
import NavBar from './components/Navbar'


function App() {
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
