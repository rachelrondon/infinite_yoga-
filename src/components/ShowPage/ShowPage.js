import React, { Component } from "react";
import SoundCloud from 'react-soundcloud-widget';

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
    console.log(this.props.params.id)
    fetch(`https://thedailyroutine.herokuapp.com/routines/${this.props.params.id}`, {
      method: 'GET',
    })
    .then((results) => {
      results.json().then((routines_data) => {
        this.setState({
          routines: routines_data,
          image_credt: routines_data[0].image_credt,
          currentImage: routines_data[0].image,
          name: routines_data[0].name,
          audio: routines_data[0].audio,
          count: this.state.count + 1
        }, () => {
          this.showImage()
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  showImage() {
    console.log('called', this.state.count)
    setInterval(() => {
      console.log(this.state.count)
      this.setState({
        currentImage: this.state.routines[this.state.count].image,
        name: this.state.routines[this.state.count].name,
        audio: this.state.routines[this.state.count].audio,
        count: this.state.count + 1,
      })
    }, this.state.routines[0].milliseconds)
  }

  onPlay() {
    console.log('playing');
  }

  render(){
      return(
        <div>
          <div>
            {this.showImage}
          </div>
          <div className="routineCard">
            <div className="wrapper">
                <img id="move-image" src={this.state.currentImage}></img>
                <div className="overlay">
                  <div id="move-bar">
                    <h4 id="move-name">{this.state.name}</h4>
                  </div>
                </div>
            </div>
          </div>
          <div id="sound-cloud-div">
            <SoundCloud
              url={this.state.audio}
              onPlay={this.onPlay}
            />
          </div>
        </div>
       );
     }
   }

export default ShowPage;
