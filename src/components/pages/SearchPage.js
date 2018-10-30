import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from '../Book.js'
import Shelf from '../Shelf'


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
          books: props.books.filter((b)=> b.id !== book.id).concat(book) ,
          value: this.currentShelf //filter through books- concat those not there
        }))})}   

	updateSearch = (query) => {
	  	this.setState({query: query})
	  	this.updateSearched(query);
	  }

  /*updateSearched = (query)=> {
  		BooksAPI.search(query).then((searchResults)=>
        this.setState(searchResults:searchResults))
      if(query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i') //remove this.state
      let searchResults = this.state.books.filter((books)=> match.test(this.state.books.title || this.state.books.author)) //filter to match search
      console.log({searchResults});
      this.state.searchResults.sort(sortBy('title'))
    } else{
      this.setState({searchResults: []})
    }}*/

   updateSearched = (query) => {
    if (query){
            BooksAPI.search(query).then((searchResults)=> // chage state of serachResults
              {
            if(searchResults.error){ //if no results when typing/ backspace keep as array
              this.setState({searchResults: []}) 
            } else{
              this.setState({searchResults:searchResults})
            } } )}
    else {
      this.setState({searchResults: []})
    }
  }


	render() {
      
		return (
          <div className="search-books">
            <div className="search-books-bar">
              <NavLink to= '/'	className="close-search">Close</NavLink>
              <div className="search-books-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
               <input //update state and value of input field
               className="search-text"
               	type="text" //user enters text
               	placeholder="Search by title or author"
               	value={this.state.query} //calls setState to merge new state- rerender
               	onChange={(e) => this.updateSearch(e.target.value)} 
               	/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"> {/*display books matching searchResults*/}
              		{this.state.searchResults.map(searchResult => (
              			<li key={searchResult.id}> 
              				<Book book={searchResult}
                        updateShelf={this.updateShelf}/>
              			</li>
              			))}
              	</ol>
            </div>
          </div>
        );
	}
} 

export default SearchPage;
