import React, { Component } from 'react'


const Book= ({book, updateShelf })=>{

        return (
          <div className="book">
            <div className="book-top">
              <span>{book.description}</span>
              <div className="book-cover" style={{ width: 128, height: 188, 
                backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail || "" }")` }}></div> {/*//display image thumbnail or blank - same format for title/author/rating*/}
              <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : "none"} onChange=
                                {e => updateShelf(book, e.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              </div>
            <div className="book-title">{book.title || "Title Not Found"}</div>
            <div className="book-authors">{book.authors || "Author Not Found"}</div>
            <div className="average-rating">{book.averageRating || "No Rating"}</div>
          </div>
  ) } 
        
export default Book;