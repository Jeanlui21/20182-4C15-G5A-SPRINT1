import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup} from 'react-bootstrap';
import { Link } from 'react-dom';
import fire from './config/Fire';

class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
        email:'',
        password:''
    }
  }

  login(e){
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{}).catch((error) => {
          console.log(error);
        });
      }
 
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error) => {
          console.log(error);
        });
      }

   handleChange(e){
    this.setState({[e.target.name]: e.target.value});
}
   render(){
       return(
           
           <Grid>
           <Row>
           <Col md={8}>
           </Col>    
           <Col md={4} className="my-5" >
           <FormGroup>

           <FormGroup >
            <label for="exampleInputEmail1">Correo Electronico</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" 
                   class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Ingrese Correo"/>
                   <small id="emailHelp" class="form-text text-muted">
                   No se compartira tu correo con nadie más.
                   </small> 
            </FormGroup >
            <div class="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input value={this.state.password} onChange={this.handleChange} type="password"
            name="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
            </div>
            <button type="submit" onClick={this.login} class="btn btn-primary">Ingreso</button>
            <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">
            Registro
            </button>
            </FormGroup>
            </Col>
            </Row>
            </Grid>
           
       );
   }
}
export default Login;