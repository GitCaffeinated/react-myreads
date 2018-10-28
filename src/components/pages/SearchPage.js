import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SearchPage extends Component {

 state = {
 books: [],
 query: ''
}

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
          this.setState({books: books})}
    ) }

 updateShelf=  (book, shelf) =>
    { 
      BooksAPI.update(book, shelf)
      .then(resp => {book.shelf = shelf;
        this.setState(props=> ({ //change shelf of books
          books: props.books.filter((b)=> b.id !== book.id).concat(book) //filter through books- concat those not there
        }))})}   

  updateQuery = (query) => {
  	this.setState({query: query.trim()})
  }

	render() {

		let searchResults 

		if(this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			searchResults = this.props.books.filter((books)=> match.test(books.title))
			searchResults.sort(sortBy('name'))
		} 

		return (
          <div className="search-books">
            <div className="search-books-bar">
              <NavLink to= '/'	className="close-search">Close</NavLink>
              <div className="search-books-input-wrapper">
              {JSON.stringify(this.state.query)}
               <input //update state and value of input field
               className="search-text"
               	type="text" //user enters text
               	placeholder="Search by title or author"
               	value={this.state.query} 
               	onChange={(event) => this.updateQuery(event.target.value)} //calls setState to merge new state- rerenders
               	/>
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
