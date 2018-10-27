import MainPage from './components/pages/MainPage.js'
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SearchPage from './components/pages/SearchPage.js'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

 state = {
   books: [],
}

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
          this.setState({books: books})}
    ) }

     updateShelf=  (book, shelf) =>
      { 
        BooksAPI.update(book, shelf)
        .then(resp => {book.shelf = shelf;
          this.setState(props=> ({ //change shelf of books
            books: props.books.filter((b)=> b.id !== book.id).concat(book) //filter through books- concat those not there
          }))})} // does the props in the this.state books: have to be this.state?

  render() {

    return(
      <div>
      <MainPage />
        <Route exact path="/" component= {MainPage}/>
        <Route exact path="/search" component= {SearchPage}/>
      </div>
      );
 }
}
export default BooksApp
