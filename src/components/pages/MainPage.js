import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import Shelf from '../Shelf'
import * as BooksAPI from '../../BooksAPI'


class MainPage extends Component {    


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

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf currentShelf= "wantToRead" updateShelf = {this.updateShelf} title="Want to Read" books={this.state.books.filter(books => books.shelf === "wantToRead")}/>
              <Shelf currentShelf= "currentlyReading" updateShelf = {this.updateShelf} title="Currently Reading" books={this.state.books.filter(books => books.shelf === "currentlyReading")}/>
              <Shelf currentShelf= "read" updateShelf = {this.updateShelf} title="Read" books={this.state.books.filter(books => books.shelf === "read")}/>
              {/*<Shelf currentShelf= "didNotFinish" updateShelf = {this.updateShelf} title="Did Not Finish" books={this.state.books.filter(books => books.shelf === "didNotFinish")}/>*/}
            </div>
            <div className="open-search">
              <NavLink to='/search' className="to-search-bar">Add a book</NavLink>
            </div>
          </div>
      );}
    }

export default MainPage;