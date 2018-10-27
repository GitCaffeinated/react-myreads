import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import Shelf from '../Shelf'
import Book from '../Book'
import * as BooksAPI from '../../BooksAPI'
import BooksApp from '../../App'

class MainPage extends Component {      

	render() {

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf title="Want to Read" this.props.books={this.state.books.filter(books => books.shelf === "wantToRead")}/>
              <Shelf title="Currently Reading" books={this.state.books.filter(books => books.shelf === "currentlyReading")}/>
              <Shelf title="Read" books={this.state.books.filter(books => books.shelf === "read")}/>
              <Shelf title="Did Not Finish" books={this.state.books.filter(books => books.shelf === "didNotFinish")}/>
            </div>
            <div className="open-search">
              <NavLink to='/search' className="to-search-bar">Add a book</NavLink>
            </div>
          </div>
      );}
    }

export default MainPage;