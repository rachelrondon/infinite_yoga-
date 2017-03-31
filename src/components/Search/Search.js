import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import ReactTimeout from 'react-timeout';

class Search extends Component {
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
  fetch(`http://localhost:8000/routines/search`, {
    method: 'GET'
  })
  .then((results) => {
    results.json().then((moves_data) => {
      this.setState({
        moves: moves_data,
        currentImage: moves_data[0].image,
        name: moves_data[0].name,
        audio: moves_data[0].audio,
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
      currentImage: this.state.moves[this.state.count].image,
      name: this.state.moves[this.state.count].name,
      audio: this.state.moves[this.state.count].audio,
      count: this.state.count + 1,
    })
    console.log('hello')
  }, this.state.moves[0].milliseconds)
}

render(){
    return(
      <div>
        <div>
          {this.showImage()}
        </div>
        <div>
          <img src={this.state.currentImage}></img>
          <h1>{this.state.name}</h1>
        </div>
      </div>
     );
   }
 }

export default Search;
