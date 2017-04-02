import React, { Component } from "react";
import { Link } from "react-router";


class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      routines: [],
      moves: [
        {
          milliseconds: 5000
        }
      ],
      quotes: [
        'NAMASTE',
        'WABI-SABI',
      ],
      currentImage: '',
      count: 0,
      time: 0
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/routines`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((routines_data) => {
        this.setState({routines: routines_data});
        console.log(routines_data)
        });
      })
    .catch((err) => {
      console.log(err);
    });
  }

  render(){
    return(
      <div>
        <div id="landing-page-div">
          <nav id="nav-bar">
            <h4 id="logo-nav">DAILY ROUTINE</h4>
          </nav>

        <body id="page-body">
          <div className="routineContainer">
            {this.state.routines.map((routine) => {
              return(
                <a href={`/routines/${routine.id}`} >
                  <div key={routine.id} className="routineCard">
                    <img id="main-image" src={routine.thumbnail}></img>
                    <div id="routine-info-div">
                      <h1 id="routine-info">{routine.title} | {routine.level}</h1>
                    </div>
                  </div>
                </a>
             )
             })}
           </div>
        </body>
      </div>
    </div>
      );
    }
  }
export default LandingPage;
