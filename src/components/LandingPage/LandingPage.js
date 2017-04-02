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
      currentImage: '',
      count: 0
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

  render(){
    return(
      <div>
        <div id="landing-page-div">
        <nav id="nav-bar">
          <h1 className="logo">Daily Routine</h1>
            <div id="search-div">
              <form action="/routines/search" id="search-form">
              <div className="input-field">
                <input name="search" id="search" type="text" required placeholder="search bar"></input>
              </div>
            </form>
            </div>
        </nav>
        </div>
        <div id="img-box-div">
          {this.state.images.map((image) => {
            return(
                <div key={image.id} id="img-box-section">
                  <img className="img-lp" src={image.url}></img>
                </div>
             )
          })}
        </div>
        <div className="routineContainer">
          {this.state.routines.map((routine) => {
            return(
              <a href={`/routines/${routine.id}`} >
                <div key={routine.id} className="routineCard">
                  <h4>{routine.title} | {routine.level}</h4>
                  <img className="thumbnail" src={routine.thumbnail}></img>
                  {/* <button href={`/routines/${routine.id}/moves`} type="submit" id="the-button">ENTER</button> */}
                </div>
              </a>
             )
          })}
        </div>
        <div class="page-body">
          </div>
      </div>
      );
    }
  }
export default LandingPage;
