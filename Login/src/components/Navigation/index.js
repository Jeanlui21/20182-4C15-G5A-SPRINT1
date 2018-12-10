import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
    
      ? <NavigationAuth />
      : <NavigationNonAuth />
      
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>

<Navbar color="dark" dark expand="md" navbar>

<Nav className="ml-auto" navbar>
     <NavbarBrand tag={Link} to={routes.LANDING}>TwitterListener</NavbarBrand>
     <NavItem><NavLink tag={Link} to={routes.HOME}>BUSCAR</NavLink></NavItem>
     <NavItem><NavLink tag={Link} to={routes.ACCOUNT}>Cuenta</NavLink></NavItem>

</Nav>

<Collapse  navbar>
  <Nav className="ml-auto" navbar>
    <NavItem>
    <SignOutButton/>
    </NavItem>    
  </Nav>
</Collapse>
</Navbar>



const NavigationNonAuth = () =>
<Navbar color="dark" dark expand="md" navbar>

<Nav className="ml-auto" navbar>
     <NavbarBrand tag={Link} to={routes.LANDING}>TwitterListener</NavbarBrand>
     <NavItem><NavLink tag={Link} to={routes.SIGN_IN}>Ingresar</NavLink></NavItem>

</Nav>

</Navbar>
  
export default Navigation;
