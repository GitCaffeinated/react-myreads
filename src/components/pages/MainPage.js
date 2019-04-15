import { NavLink } from 'react-router-dom'
import React from 'react'
import Shelf from '../Shelf'
import '../../App'


const MainPage = ({books, updateShelf}) =>{    

		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf  updateShelf={updateShelf} 
                title="Want to Read" books={books.filter(books => books.shelf === "wantToRead")}/>
              <Shelf updateShelf={updateShelf} 
                title="Currently Reading" books={books.filter(books => books.shelf === "currentlyReading")}/>
              <Shelf  updateShelf={updateShelf} 
                title="Read" books={books.filter(books => books.shelf === "read")}/>
            </div>
            <div className="open-search">
              <NavLink to='/search' className="to-search-bar">Add a book</NavLink>
            </div>
          </div>
      );}
    

export default MainPage;