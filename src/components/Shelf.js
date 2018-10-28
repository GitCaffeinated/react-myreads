import Book from './Book.js'
import React, { Component } from 'react'

class Shelf extends Component {

componentDidMount(){
  console.log(this);
}

  render(){
    console.log(this.props.books)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
        <ol className= "books-grid">
        {this.props.books.filter((book) => book.shelf === book.shelf)
          .map(book => 
           (
             <li key={book.id}>
             <Book book={book}
             updateShelf={this.props.updateShelf}
             currentShelf= {this.shelf}/>
             </li>
           )
        )}
        </ol>
        </div>
    </div>
      );
  }
}

export default Shelf;
