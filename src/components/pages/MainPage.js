import Book from '../Book'
import { NavLink } from 'react-router-dom'
import React from 'react'
import Shelf from '../Shelf'
import * as BooksAPI from '../../BooksAPI'


class MainPage extends React.Component {
    //used lesson 4 as template
  state = {
   books: []
}

  componentDidMount(){
    BooksAPI.getAll().then(BookList=>(
      this.setState({books: BookList})
      )) //update in return
  }



	render() {
		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf books={this.state.books.filter(b => b.shelf ==="CurrentlyReading"}/>
                <Book />
            </div>
            <div className="open-search">
              <NavLink to='/search' className="to-search-bar">Add a book</NavLink>
            </div>
          </div>
   
      );}
    }

export default MainPage;