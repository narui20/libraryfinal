import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn/SignIn';
import Login from './Login/Login';
import BookDetails from './BookDetails/BookDetails';
import Book from './Book/Book';

class App extends Component{
  render(){
    return(
      <div>
        <div>Hello User. Welcome to react</div>
        {<SignIn></SignIn>
        <Login></Login>}
        <Book></Book>
        <BookDetails></BookDetails>
      </div>
    );
  }
}

export default App;
