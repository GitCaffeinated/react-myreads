import Book from './Book.js'
import React, { Component } from 'react'

class Shelf extends Component {

componentDidMount(){
  console.log(this);
}

  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
        <ol className= "books-grid">
          <Book {this.props.title((book) => book.shelf={book.shelf}) /> ) }
        </ol>
        </div>
    </div>
      );
  }
}


export default Shelf;
