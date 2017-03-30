import React, { Component } from "react";


class ShowPage extends Component {

  render(){
  return(
    <div>
      <div className="routineContainer">
         {this.state.routines.map((routine) => {
           return(
             <div key={routine.id} className="routineCard">
               <h4>{routine.title}</h4>
               <h4>{routine.image}</h4>
             </div>
           );
         })}
     </div>
</div>
  );
}
}
export default ShowPage;
