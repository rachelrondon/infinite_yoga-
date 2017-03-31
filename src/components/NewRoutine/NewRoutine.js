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
        time1: '',
        image2: '',
        time2: '',
        image3: '',
        time3: '',
        image4: '',
        time4: '',
        image5: '',
        time5: '',
        image6: '',
        time6: '',
        image7: '',
        time7: '',
        image8: '',
        time8: '',
        image9: '',
        time9: '',
        image10: '',
        time10: '',
        image11: '',
        time11: '',
        image12: '',
        time12: '',
        user_id: 5
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
          <select className="drop-down-placeholder" name="time1" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image2" placeholder="Add photo two" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time2" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image3" placeholder="Add photo three" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time3" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image4" placeholder="Add photo four" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time4" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image5" placeholder="Add photo five" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time5" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image6" placeholder="Add photo six" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time6" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image7" placeholder="Add photo seven" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time7" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image8" placeholder="Add photo eight" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time8" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image9" placeholder="Add photo nine" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time9" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image10" placeholder="Add photo ten" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time10" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image11" placeholder="Add photo eleven" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time11" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <input type="text" name="image12" placeholder="Add photo twelve" onChange={this.handleChange.bind(this)}></input>
          <select className="drop-down-placeholder" name="time12" onChange={this.handleChange.bind(this)}>
            <option disabled selected>Choose Time In Seconds</option>
            <option value="5000">Five Seconds</option>
            <option value="10000">Ten Seconds</option>
            <option value="15000">Fifteen Seconds</option>
            <option value="20000">Twenty Seconds</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </body>
    );
  }
}
export default NewRoutine;
