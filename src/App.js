import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { Component } from 'react';
import Nav from './components/dashboard/Nav';
import Home from './components/dashboard/Home.js'
import PostAJob from './components/postAJob/postajobform'
import Login from './components/auth/Login'

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/postJob" component={PostAJob}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
        </div>  
      </BrowserRouter>
    );
  }  
}

export default App;
