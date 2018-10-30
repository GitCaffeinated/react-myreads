import React, { Component } from 'react'

class Book extends Component {

  render() {

        return (
          <div className="book">
            <div className="book-top">
              <span>{this.props.book.description}</span>
              <div className="book-cover" style={{ width: 128, height: 188, 
                backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || "" }")` }}></div> {/*//display image thumbnail or blank - same format for title/author/rating*/}
              <div className="book-shelf-changer">
                <select value={this.props.book.shelf || "none"} onChange=
                                {e =>this.props.updateShelf(this.props.book, e.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="read">Read</option>
                  <option value="didNotFinish">Did Not Finish</option>
                  <option value="none">None</option>
                </select>
              </div>
              </div>
            <div className="book-title">{this.props.book.title || "Title Not Found"}</div>
            <div className="book-authors">{this.props.book.authors || "Author Not Found"}</div>
            <div className="average-rating">{this.props.book.averageRating || "No Rating"}</div>
          </div>
        ) } }
        
export default Book;
