import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from '../Book.js'


class SearchPage extends Component {

 state = {
 books: [],
 query: '',
 searchResults: [],
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


	updateSearch = (query) => {
	  	this.setState({query: query.trim()})
	  	this.updateSearched(query);
	  }

  updateSearched = (query)=> {
  		BooksAPI.search(query).then((searchResults)=>
  			this.setState(searchResults:searchResults))
  		if(query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			let searchResults = this.state.books.filter((books)=> match.test(this.state.books.title || this.state.books.author)) //filter to match search
			console.log({searchResults});
			this.state.searchResults.sort(sortBy('title'))
		} else{
			this.setState({searchResults: []})
		}}

	render() {

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
               	value={this.state.query} //calls setState to merge new state- rerender
               	onChange={(event) => this.updateSearch(event.target.value)} 
               	/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"> {/*display books matching searchResults*/}
              		{this.state.searchResults.map((searchResult) => (
              			<li key={searchResult.id}> 
              				<Book book={searchResult}/>
              			</li>
              			))}
              	</ol>
            </div>
          </div>
        );
	}
} 

export default SearchPage;
