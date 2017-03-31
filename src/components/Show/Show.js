import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import ReactTimeout from 'react-timeout';

class ShowPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moves: [],
      currentImage: '',
      count: 0
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/moves/show`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((moves_data) => {
        this.setState({
          moves: moves_data,
          currentImage: moves_data[0].image,
          count: this.state.count + 1
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  showImage() {

    console.log('jjjj', this.state.moves)
    setTimeout(() => {
      this.setState({
        currentImage: this.state.moves[Math.floor(Math.random() * this.state.moves.length)].image,
        count: this.state.count + 1
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
          </div>
        </div>
       );
     }
   }

export default ShowPage;
