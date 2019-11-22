import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home';
import Trainer from './pages/Trainer/index';
import Login from './components/Login/Login';
import './components/style/style.css'
// import Slideshow from './pages/Lessons/Lessons';

class App extends Component { 
  // State goes here = {token: ''}
  // state = {
  //   token: '',
  //   loggedin: false
  // };

  // storeToken = (token) => {
  //   // setState with token
  //   // console.log(token)
  //   this.setState({
  //     token: token,
  //     loggedin:true
  //   })
  // }

  // clearToken = (token) => {
  //   this.setState({
  //     token: ''
  //   })
  // }

  // logOut = () => {
  //   this.setState({
  //     loggedin: false,
  //     token: ''
  //   })
  // }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login"  component={Home} />
          <Route path="/trainer" component={Trainer} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router >
    )
  }

}

  export default App;
