import React from 'react';
import { NavLink } from 'reactstrap';
import { auth } from '../../firebase';

const SignOutButton = () =>
  <NavLink
    type="button"
    onClick={auth.doSignOut}
  >
    Cerrar Sesión
  </NavLink>

export default SignOutButton;
