import Book from './Book.js'
import React from 'react'

class Shelf extends React.Component {
  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
           {/*//render all books with that class*/}
           <Book />
      </div>
      );
  }
}


export default Shelf;