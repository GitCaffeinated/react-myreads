import { NavLink } from 'react-router-dom'
import React from 'react'
import Shelf from '../Shelf'
import Book from '../Book'
import * as BooksAPI from '../../BooksAPI'


class MainPage extends React.Component {
    //used lesson 4 as template
 state = {
   books: []
}


  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
          this.setState({books: books})}
       ) }



	render() {

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf title="Want to Read" books={this.state.books.filter(books => books.shelf === "wantToRead")}/>
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