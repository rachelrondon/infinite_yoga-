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
          currentImage: routines_data[1].image6
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  sayHello() {
    console.log('jjjj', this.state.routines[1])
    let which
    setTimeout(() => {
      this.setState({
        currentImage: this.state.routines[1].image7
      })
      console.log('hello')
    }, 6000)
  }

  render(){
      return(
        <div>
          <div>
            {this.sayHello()}
          </div>
          <div>
            <h1>{this.state.currentImage}</h1>
          </div>
        </div>
       );
     }
   }

export default ShowPage;
