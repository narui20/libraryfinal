import React from 'react';
import './App.css';
import SignIn from './Container/SignIn/SignIn';
import Login from './Container/Login/Login';
import BookDetails from './Container/BookDetails/BookDetails';
import Book from './Container/Book/Book';
import Layout from "./Component/Layout/Layout"
import { BrowserRouter , Route, Switch} from "react-router-dom";

const App=(props)=>{
  
 let routes=(
    <Switch>
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/book" exact component={Book} />
        <Route path="/bookDetails" exact component={BookDetails} />
        <Route path="/" exact component={Login} />
  </Switch>
 )

  return(
    <BrowserRouter>
  <Layout>
  {routes}
  </Layout>
   </BrowserRouter>
  )
}

export default App;
