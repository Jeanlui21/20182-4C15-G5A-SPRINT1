import React, { Component } from 'react';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import { Button,Container,Col } from 'reactstrap';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  
  render() {
    const { users } = this.state;

    return (
      <Container className="mx-0">
        <Col md={12}>
        <h1>Pagina principal</h1>
        <p>Supuestamente se deberia comenzar a buscar aqui</p>

        { !!users && <UserList users={users} /> }
        </Col>
      </Container>
    );
  }
}

const UserList = ({ users }) =>
  <Container className="mx-0">
    <h2>Lista de Nombres de usuario</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>
    

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </Container>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);