import Book from '../Book'
import { NavLink } from 'react-router-dom'
import React from 'react'
import Shelf from '../Shelf'
import * as BooksAPI from '../../BooksAPI'


class MainPage extends React.Component {
	render() {
		return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf />
              <Book />
            </div>
            <div className="open-search">
              <NavLink to='/search' className="to-search-bar">Add a book</NavLink>
            </div>
          </div>
      </div>
      );}
    }

export default MainPage;