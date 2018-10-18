import Book from './Book.js'
import React from 'react'

class Shelf extends React.Component {

componentDidMount(){
  console.log(this);
}

  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
        <ol className= "books-grid">
          <Book chosenBook={this.state.books.filter((book) => book.shelf={book.shelf}) /> ) }
        </ol>
        </div>
    </div>
      );
  }
}


export default Shelf;
