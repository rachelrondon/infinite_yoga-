import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

import LandingPage from './components/LandingPage/LandingPage';

ReactDom.render(
  <Router history={browserHistory}>
  <Router path='/' component={LandingPage} />
 </Router>

,document.getElementById("app"));
