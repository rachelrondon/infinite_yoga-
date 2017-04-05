import React, { Component } from "react";


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
    fetch(`https://thedailyroutine.herokuapp.com/routines`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(r => r.json())
    .then((routines_data) => {
      console.log('hi', routines_data)
      this.setState({
        routines: routines_data
      }, () => {
        console.log('post tss', this.state)
        this.renderRoutine();
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }





  handleSideNavClick() {
    this.setState({
      SideNavClick: true
    })
  }

  renderSideNav() {
    if(this.state.SideNavClick) {
      return(
        <div className="hide-on-small-only">
          <form action="/routines/search" id="search-form">
          <div className="input-field">
            <input name="search" id="search" type="text" required placeholder=""></input>
            <label id="the-search-icon" id="search-icon" className="label-icon" for="search"><i className="material-icons">search</i></label>
            <a className="white-text" type="submit" id="the-button">ENTER</a>
          </div>
          </form>
        </div>
      )
    }
  }

  renderRoutine() {
    // console.log('routine rendering', this.state.routines[0].id, this.state.routines[1].id, this.state.routines[2].id)
    return this.state.routines.map((routine) => {
      console.log(routine.id)
      return(

        <a href={`https://thedailyroutine.herokuapp.com/routines/${routine.id}`} >
          <div key={routine.id} className="routineCard">
            <img id="main-image" src={routine.thumbnail}></img>
            <div id="routine-info">
              <i className="material-icons">play_arrow</i><h4 id="logo-nav">DAILY ROUTINE</h4>
              <h1 id="routine-info">{routine.title} | {routine.level}</h1>
           </div>
          </div>
        </a>
      )
     }
    )

  }

  render(){
    return(
      <div>
        <div id="landing-page-div">
          <nav id="nav-bar">
            <div className="nav-wrapper">
              <i className="material-icons">play_arrow</i><h4 id="logo-nav">DAILY ROUTINE</h4>
          </div>
        </nav>
        <body id="page-body">
         <div className="routineContainer">
           {this.renderRoutine()}
          </div>
       </body>
      </div>
    </div>
      );
    }
  }
export default LandingPage;
