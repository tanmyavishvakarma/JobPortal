import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { Component } from 'react';
import Nav from './components/dashboard/Nav';
import Home from './components/dashboard/Home.js'
import PostAJob from './components/postAJob/postajobform'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register'
import findjob from './components/findAJob/findajobform'
import JobProfile from './components/JobProfile/JobProfile'

class App extends Component{z

  render(){
    return(
      <BrowserRouter>
        <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/postjob" component={PostAJob}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/findjob" component={findjob}></Route>
          <Route exact path="/jobprofile/:jobtitle/:company/:officelocation/:jobtype/:publisher" component={JobProfile}></Route>
        </Switch>
        </div>  
      </BrowserRouter>
    );
  }  
}

export default App;
