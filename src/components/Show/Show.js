import React, { Component } from "react";
import update from 'react-addons-update';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';


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
                   <h4>{routine.title}</h4>
                   <h4>{routine.image1}</h4>
                   <h4>{routine.image2}</h4>
                   <h4>{routine.image3}</h4>
                   <h4>{routine.image4}</h4>
                   <h4>{routine.image5}</h4>
                   <h4>{routine.image6}</h4>
                   <h4>{routine.image7}</h4>
                   <h4>{routine.image8}</h4>
                   <h4>{routine.image9}</h4>
                   <h4>{routine.image10}</h4>
                   <h4>{routine.image11}</h4>
                   <h4>{routine.image12}</h4>
                 </div>
               );
             })}
         </div>
    </div>
    );
  }
}
export default ShowPage;
