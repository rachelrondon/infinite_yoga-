import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

import './components/Style/Style.css';

import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import NewUser from './components/NewUser/NewUser';
import ShowPage from './components/Show/Show';
import SignUpPage from './components/SignUp/SignUp';
import NewRoutine from './components/NewRoutine/NewRoutine';
import Beginner from './components/Beginner/Beginner';
import Advanced from './components/Advanced/Advanced';
import Search from './components/Search/Search';

ReactDom.render(
  <Router history={browserHistory}>
  <Router path='/' component={LandingPage} />
  <Router path='/login' component={Login} />
  <Router path='/user/new' component={NewUser} />
  <Router path='/show' component={ShowPage} />
  <Router path='/signup' component={SignUpPage} />
  <Router path='/newroutine' component={NewRoutine} />
  <Router path='/beginner' component={Beginner} />
  <Router path='/advanced' component={Advanced} />
  <Router path='/search' component={Search} />
 </Router>

,document.getElementById("app"));
