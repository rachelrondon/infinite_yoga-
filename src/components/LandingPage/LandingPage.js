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
    fetch(`https://thedailyroutine.herokuapp.com/routines/`, {
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

  render(){
    return(
      <div>
         <div id="full">
           {this.state.routines.map((routine) => {
             return(
              <Link href={`/routines/${routine.id}`} >
                 <div key={routine.id}>
                   <img id="main-image" src={routine.thumbnail}></img>
                   {/* <div id="routine-info">
                     <i className="material-icons">play_arrow</i><h4 id="logo-nav">DAILY ROUTINE</h4>
                     <h1 id="routine-info">{routine.title} | {routine.level}</h1>
                  </div> */}
                 </div>
               </Link>
            )
            })}
        </div>
    </div>
      );
    }
  }
export default LandingPage;
