import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import ReactTimeout from 'react-timeout';

class ShowPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      routines: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/routines/show`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((routines_data) => {
        this.setState({routines: routines_data});
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }


      render(){
      return(
        <div>
          <div className="routineContainer">
             {this.state.routines.map((routine) => {
               console.log(routine.id);
               return(
                 <div key={routine.id} className="routineCard">
                   <img className="rtImage" src={routine.image1} />
                   <img className="rtImage" src={routine.image2} />
                   <img className="rtImage" src={routine.image3} />
                   <img className="rtImage" src={routine.image4} />
                   <img className="rtImage" src={routine.image5} />
                   <img className="rtImage" src={routine.image6} />
                   <img className="rtImage" src={routine.image7} />
                   <img className="rtImage" src={routine.image8} />
                   <img className="rtImage" src={routine.image9} />
                   <img className="rtImage" src={routine.image10} />
                   <img className="rtImage" src={routine.image11} />
                   <img className="rtImage" src={routine.image12} />
                </div>
               );
             })}
         </div>
    </div>
    );
  }
}
export default ShowPage;
