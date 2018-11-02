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
          books: props.books.filter((b)=> b.id !== book.id).concat(book) ,
          value: this.currentShelf //filter through books- concat those not there
        }))})}   

  render() {

    return(
      <div>
     render={() => (
            <MainPage books={this.state.books} updateShelf={this.updateShelf} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              updateShelf={this.updateShelf}
            /> )}
        />
      </div>
      );
 }
}
export default BooksApp


/// in dropdown- value doesn't change
