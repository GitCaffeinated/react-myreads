import Book from './Book.js'
import React from 'react'

const Shelf = ({updateShelf, title, books}) => {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        <ol className= "books-grid">
        {books.filter((book) => book.shelf === book.shelf)
          .map(book => 
           (
             <li key={book.id}>
             <Book book={book}
             updateShelf= {updateShelf}
            />
             </li>
           )
        )}
        </ol>
        </div>
    </div>
      );
  }


export default Shelf;
