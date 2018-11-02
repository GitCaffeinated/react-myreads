import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book.js'
import Shelf from '../Shelf'
import '../../App'


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

	updateSearch = (query) => {
	  	this.setState({query: query})
	  	this.updateSearched(query);
	  }

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
              		{this.state.searchResults.map(searchResult => {
                   //this.shelf = this.currentShelf || "none" 
                   // console.log({searchResult});
                    //{e =>this.props.updateShelf(this.props.book, e.target.value)}
                    {this.props.books.map((book) => {book.id === searchResult.id ? (searchResult.shelf = book.shelf ): null})
                    return(
                          <li key={searchResult.id}> 
                            <Book book={searchResult}
                            updateShelf={this.props.updateShelf}
                           />
                          </li>) 
                        } } ) }
              	</ol>
            </div>
          </div>
        );
	}
} 

export default SearchPage;
