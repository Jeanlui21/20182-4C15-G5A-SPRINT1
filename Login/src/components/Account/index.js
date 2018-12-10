import React from 'react';
import {Container,Col } from 'reactstrap';
import AuthUserContext from '../Session/AuthUserContext';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
    <Container>
      <Col md={6} className="shadow-sm p-3 mb-2 bg-white rounded align-middle
                             border border-info">
      <h2>Cambiar de Contraseña</h2>
      </Col> 
      <Col md={6} className="shadow p-3 mb-5 bg-white rounded align-middle
                             border border-info"> 
        <h3>Correo: {authUser.email}</h3>
        <hr></hr>
        <PasswordChangeForm />
      </Col>
      </Container>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);