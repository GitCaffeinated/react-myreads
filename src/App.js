import MainPage from './components/pages/MainPage.js'
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SearchPage from './components/pages/SearchPage.js'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

 
 state = {
 books: [],
 query: '',
 searchResults: [],
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

 updateSearched = (query) => {
    if (query){
            BooksAPI.search(query).then((searchResults)=> // chage state of serachResults
              {
            if(searchResults.error){ //if no results when typing/ backspace keep as array
              this.setState({searchResults: []}) 
            } else{

              this.setState({searchResults:searchResults})
            } } )}
    else {
      this.setState({searchResults: []})
    }
  }
      
  render() {

    return(
      <div>
        <Route exact path="/" component= {MainPage} currentShelf= {this.shelf} books = {this.state.books} updateShelf = {this.updateShelf}/>
        <Route exact path="/search" component= {SearchPage} currentShelf= {this.shelf} books = {this.state.books} updateShelf = {this.updateShelf}/>
      </div>
      );
 }
}
export default BooksApp


/// in dropdown- value doesn't change
