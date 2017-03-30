import React, { Component } from "react";
import { Link } from "react-router";

class LandingPage extends Component {

  render(){
    return(
      <body>
        <nav>
          <div className="lp-sign-up link">
            <h3><Link to='/user/new' className="sign-up"> Sign Up</Link></h3>
          </div>
          <div className="lp-login-in link">
           <h3><Link to='/login' className="login"> Login</Link></h3>
        </div>
        </nav>
          <div id="page-div">
            <div class="logo">
              <h1>INFINITE</h1>
              <h1>YOGA</h1>
            </div>
          </div>
      </body>
    );
  }
}
export default LandingPage;
