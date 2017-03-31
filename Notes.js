Notes:

// Show Page:

import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import ReactTimeout from 'react-timeout';

class ShowPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      routines: [],
      currentImage: '',
      count: 0
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/routines/show`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((routines_data) => {
        this.setState({
          routines: routines_data,
          currentImage: routines_data[0].image1,
          count: this.state.counter + 1
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  showImage() {

    console.log('jjjj', this.state.routines[0])
    setTimeout(() => {
      this.setState({
        currentImage: this.state.routines[0].image2,
        count: this.state.counter + 1
      })
      console.log(count)
      console.log('hello')
    }, this.state.routines[0].time2)
  }

changeImage() {
  if(this.state.counter + 1) {
    return(
      this.state.routines[0]
    )
  }
}

  render(){
      return(
        <div>
          <div>
            {this.showImage()}
          </div>
          <div>
            <img src={this.state.currentImage}></img>
          </div>
        </div>
       );
     }
   }

export default ShowPage;
