import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'


class Book extends Component {

  render() {

        return (
          <div className="book">
            <div className="book-top">
              <span>{this.props.book.description}</span>
              <div className="book-cover" style={{ width: 128, height: 188, 
                backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
              <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange=
                {e => this.updateShelf(this.props.book, e.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="read">Read</option>
                  <option value="didNotFinish">Did Not Finish</option>
                  <option value="none">None</option>
                </select>
              </div>
              </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
            <div className="average-rating">{this.props.book.averageRating}</div>
          </div>
        ) } }
        
export default Book;
