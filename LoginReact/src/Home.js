import React, { Component } from 'react';
import fire from './config/Fire';

class Home extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    
    
  }

  logout(){
      fire.auth().signOut();
  }


   render(){
       return(
           <div className="col-md-6">
           <h1>
               Esta en la pagina principal.
           </h1>
           
           <button onClick={this.logout}>Cerrar Sesión</button>
           </div>
       );
   }
}
export default Home;