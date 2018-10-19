import React, { Component } from 'react'

class Book extends Component {

  render() {

        return (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("${book.imageLinks.thumbnail}"")' }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="didNotFinish">Did Not Finish</option>
                  <option value="none">None</option>
                </select>
              </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.author}</div>
          </div>
          </div>

        ) } }
        
export default Book;
