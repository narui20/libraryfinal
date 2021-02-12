import React, { useEffect } from 'react';
import './App.css';
import SignIn from './Container/SignIn/SignIn';
import Login from './Container/Login/Login';
import BookDetails from './Container/BookDetails/BookDetails';
import Book from './Container/Book/Book';
import Layout from "./Component/Layout/Layout"
import { BrowserRouter , Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
import Logout from "./Component/Logout/Logout"
import AddAdmin from "./Container/Admin/AddAdmin"


const App=(props)=>{
  let routes=null;


  routes=(
    localStorage.getItem("loggedIn")!=="yes"?
    <Switch>
       <Route path="/signIn" component={SignIn} />
       <Route path="/" exact component={Login} />
    </Switch>:
    <Switch>
    <Route path="/book" component={Book} />
    <Route path="/" exact component={Book} />
    <Route path="/bookDetails"  component={BookDetails} />
    <Route path="/addAdmin" component={AddAdmin}/>
    <Route path="/logout"component={Logout}/>
</Switch>
  )

  console.log(localStorage.getItem("loggedIn"))

  return(
   <div className="app">
  <Layout>
  {routes}
  </Layout>
  </div>
  )
}

export default withRouter(App);
