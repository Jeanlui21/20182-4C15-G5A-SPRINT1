import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { auth } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <Form onSubmit={this.onSubmit}>
      <Label for="NewPassword" className="my-1" >Nueva Contraseña</Label>
        <Input className="my-1"
          id="NewPassword"
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Contraseña"
        />
      <Label for="RepeatNewPassword" className="my-1">Repetir Contraseña</Label>
        <Input className="my-1"
          id="RepeatNewPassword"
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirmar Nueva Contraseña"
        />
        <Button disabled={isInvalid} type="submit" className="btn btn-info my-2">
          Confirmar Cambio
        </Button>

        { error && <p>{error.message}</p> }
      </Form>
    );
  }
}

export default PasswordChangeForm;