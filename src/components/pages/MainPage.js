import React from 'react'
import { NavLink } from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import Shelf from '../Shelf'
import Book from '../Book'


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