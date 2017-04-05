import React from "react";
import ReactDom from "react-dom";
import { Router, browserHistory } from "react-router";

import './components/Style/Style.css';

import './vendor/materialize/css/materialize.css';
import './vendor/materialize/css/materialize.min.css';

import LandingPage from './components/LandingPage/LandingPage';
import ShowPage from './components/ShowPage/ShowPage';

ReactDom.render(
  <Router history={browserHistory}>
  <Router path='/' component={LandingPage} />
  <Router path='/routines/:id' component={ShowPage} />
 </Router>

,document.getElementById("app"));
