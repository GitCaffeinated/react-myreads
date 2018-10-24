import React, { Component } from 'react'

class Book extends Component {

  state={ //empty to receive user imput
         value: ''
       };    

   editShelf = (book, shelf) => {
        update(book, shelf); //change state of bookshelf from click- used react documentation
      }

  render() {

        return (
          <div className="book">
            <div className="book-top">
              <span>{this.props.book.description}</span>
              <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
              <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.props.editShelf(
                      this.props.book, this.props.shelf
                    )}>
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
