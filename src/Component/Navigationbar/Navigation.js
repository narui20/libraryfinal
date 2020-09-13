import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { NavbarBrand, NavLink, NavItem, Collapse} from 'reactstrap';
import "./Navigation.css";
import logo from "../../BookShook.jpg";
const Navigation =(props)=>{
   let menu=(
    <Nav className="mr-auto" navbar >
         <NavItem className="item">
          <NavLink href="/">Login</NavLink>
      </NavItem>
      <NavItem className="item">
          <NavLink href="/signIn">SignIn</NavLink>
      </NavItem>
      <NavItem className="item">
          <NavLink href="/book">Book</NavLink>
      </NavItem>
      <NavItem className="item">
          <NavLink href="/bookDetails">Book-details</NavLink>
      </NavItem>
        </Nav>
   )

   return(
     
    <Navbar bg="success" variant="light" expand="md">
      <NavbarBrand href="/">
        <img
          alt="MobTool"
          src={logo}
          width="150"
          height="40"
        />
      </NavbarBrand>
      {menu}
      </Navbar>

   )
}

export default withRouter(Navigation)