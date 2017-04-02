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

  // componentDidMount() {
  //   fetch(` "Api-Key:xzk94bhpsu6t2t7f7hp4wauw" https://api.gettyimages.com:443/v3/search/images?age_of_people=adults_only&embed_content_only=true&exclude_nudity=true&file_types=jpg&graphical_styles=photography&phrase="${yoga}"&sort_order=best_match`, {
  //     method: 'GET'
  //   })
  //   .then((results) => {
  //     results.json().then((images_data) => {
  //       this.setState({images: images_data});
  //       });
  //     })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

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

  // getQuote() {
  //   this.setState({
  //     quote:(this.state.quote.lenth * Math.random)
  //   })
  // }

  render(){
    return(
      <div>
        <div id="landing-page-div">
        <nav id="nav-bar">
          {/* <h6>YOUR DAILY DOSE OF YOGA & TRAVEL</h6> */}
          {/* <h1> + </h1> */}
          <h5 id="logo-nav">DAILY ROUTINE</h5>
          {/* <h1> + </h1>
          <h5>TRAVEL</h5> */}

        </nav>
        {/* <div id="search-div">
          <form action="/routines/search" id="search-form">
          <div className="input-field">
          <input name="search" id="search" type="text" required placeholder="search bar"></input>
        </div>
      </form>
    </div> */}
        <body id="page-body">
        <div id="the-logo-div">
          {/* <h5 className="logo">DAILY ROUTINE</h5> */}
        </div>
        <div className="routineContainer">
          {this.state.routines.map((routine) => {
            return(
              <a href={`/routines/${routine.id}`} >
                <div key={routine.id} className="routineCard">
                  <h1>{routine.title} | {routine.level}</h1>
                  {/* <img className="thumbnail" src={routine.thumbnail}></img> */}
                  {/* <button href={`/routines/${routine.id}/moves`} type="submit" id="the-button">ENTER</button> */}
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
