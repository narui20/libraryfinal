import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import {withRouter} from "react-router";
import { NavbarBrand, NavItem, Collapse} from 'reactstrap';
import "./Navigation.css";
import logo from "../../BookShook.jpg";
import {connect} from "react-redux";

const Navigation =(props)=>{
  let menu=null;
  if(localStorage.getItem("loggedIn")!=="yes"){
    // if(props.log!=="yes"){
     menu=(
    <Nav className="mr-auto" navbar >
         <NavItem className="item">
          <Link to="/">Login</Link>
      </NavItem>
      <NavItem className="item">
          <Link to="/signIn">SignIn</Link>
      </NavItem>
      </Nav>
   )
     }
     else{
       
       menu=(
        localStorage.getItem("admin")!=="yes"?
        // props.admin!=="yes"?
         <Nav className="mr-auto" navbar>
        <NavItem className="item">
        <Link to="/logout" >Logout</Link>
        </NavItem>
        </Nav>:
        <Nav className="mr-auto" navbar>
        <NavItem className="item">
        <Link to="/logout" >Logout</Link>
        <Link to="/bookDetails">Add New</Link>
        <Link to="/addAdmin">Add Admin</Link>
        </NavItem>
        </Nav>

       )
     }
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

const mapStateToProps=state=>{
  return{
    log:state.loggedIn,
    admin:state.admin
  }
}

export default connect(mapStateToProps,null)(withRouter(Navigation))