import { NavLink } from 'react-router-dom'
import React from 'react'

class SearchPage extends React.Component {
	render() {
		return (
          <div className="search-books">
            <div className="search-books-bar">
              <NavLink to= '/'	className="close-search">Close</NavLink>
              <div className="search-books-input-wrapper">
               <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
	}
} 

export default SearchPage;
//create little icon saying "No results"