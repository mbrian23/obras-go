import React, { Component, Fragment } from 'react';
import axios from 'axios';
import MapReact from './components/map'
import Marker from './assets/marker.svg'
import { Route, Switch } from 'react-router-dom'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage'
import Settings from './pages/Settings.js'
import Map from './pages/Map'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/SignUp'

import Mandalay from './pages/Mandalay'
import Maui from './pages/Maui'


import ProtectedRoute from './components/protectedRoute';
import MenuBar from "./components/menuBar.js";
import map from "./components/map.js";





class App extends Component {

  render() {
    return (
      <div className="App">
        <MenuBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/map" component={Map} />
          <ProtectedRoute exact path="/edificios" component={Map} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/settings" component={Settings} />
          <ProtectedRoute exact path="/site/mandalay" component={Mandalay} />
          <ProtectedRoute exact path="/site/edificio-maui" component={Maui} />
          <ProtectedRoute exact path="/casas" component={map} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
 }
 export default App;
 
