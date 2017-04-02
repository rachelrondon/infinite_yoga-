import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import ReactTimeout from 'react-timeout';

class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routines: [
        {
          milliseconds: 5000
        }
      ],
      currentImage: '',
      count: 0
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/routines/1`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((routines_data) => {
        this.setState({
          routines: routines_data,
          currentImage: routines_data[0].image,
          name: routines_data[0].name,
          audio: routines_data[0].audio,
          count: this.state.count + 1
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  showImage() {
    setInterval(() => {
      this.setState({
        currentImage: this.state.routines[this.state.count].image,
        name: this.state.routines[this.state.count].name,
        audio: this.state.routines[this.state.count].audio,
        count: this.state.count + 1,
      })
      console.log('hello')
    }, this.state.routines[0].milliseconds)
  }

  render(){
      return(
        <div>
          <div>
            {this.showImage()}
          </div>
          <div>
            <img src={this.state.currentImage}></img>
            <h4>{this.state.name}</h4>
          </div>
        </div>
       );
     }
   }

export default ShowPage;
