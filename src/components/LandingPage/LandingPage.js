import React, { Component } from "react";
import { Link } from "react-router";

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moves: [
        {
          milliseconds: 5000
        }
      ],
      currentImage: '',
      count: 0
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/routines`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((routines_data) => {
        this.setState({routines: routines_data});
        });
      })
    .catch((err) => {
      console.log(err);
    });
  }

  render(){
    return(
      <div>
        <nav>
          <div className="lp-sign-up link">
            <h3><Link to='/user/new' className="sign-up"> Sign Up</Link></h3>
          </div>
        </nav>
          <form action="/routines/search" id="search-form">
          <div className="input-field">
            <input name="search" id="search" type="text" required placeholder="search bar"></input>
            <label id="search-icon" class="label-icon" for="search"><i class="material-icons">search</i></label>
            <button className="indigo darken-4 white-text" href="/routines/search" type="submit" id="the-button">ENTER</button>
          </div>
          </form>
          <div className="lp-login-in link">
           <h3><Link to='/login' className="login"> Login</Link></h3>
        </div>
          <div id="page-div">
            <div class="logo">
              <h1>INFINITE</h1>
              <h1>YOGA</h1>
            </div>
          </div>
          <div className="routineContainer">
            {this.state.routines.map((routine) => {

            return(
              <div key={routine.id} className="routineCard">
                <h1>{routine.title}</h1>
                <h1>{routine.level}</h1>
                <>Play Routine</a></div>
              </div>
              )
              })}
          </div>
        </div>
      );
    }
  }
export default LandingPage;
