import React, { Component } from "react";
import { browserHistory } from 'react-router';
import update from 'react-addons-update';

class NewRoutine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routine: {
        title: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        image7: '',
        image8: '',
        image9: '',
        image10: '',
        image11: '',
        image12: '',
        user_id: 1
      }
    };
  }

  handleChange(event) {
    let newState = update(this.state, {
      routine: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    })
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.routine);

    fetch('http://localhost:8000/routines/new', {
      method: 'POST',
      body: JSON.stringify({
        routine: this.state.routine
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(() => {
      browserHistory.push('/');
    });
  }

  render(){
    return(
      <body>
        <nav>
          <h3>INFINITE YOGA</h3>
        </nav>
        <div id="page-div">
          <div className="logo">
            <h1>New Routine Page!</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)} className="formFlex">
          <input type="text" name="title" placeholder="Title" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image1" placeholder="Add photo one" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image2" placeholder="Add photo two" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image3" placeholder="Add photo three" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image4" placeholder="Add photo four" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image5" placeholder="Add photo five" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image6" placeholder="Add photo six" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image7" placeholder="Add photo seven" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image8" placeholder="Add photo eight" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image9" placeholder="Add photo nine" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image10" placeholder="Add photo ten" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image11" placeholder="Add photo eleven" onChange={this.handleChange.bind(this)}></input>
          <input type="text" name="image12" placeholder="Add photo twelve" onChange={this.handleChange.bind(this)}></input>
          <button type="submit">Submit</button>
        </form>
      </body>
    );
  }
}
export default NewRoutine;
