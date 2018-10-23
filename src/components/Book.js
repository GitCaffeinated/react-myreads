import React, { Component } from 'react'

class Book extends Component {

  render() {

      state={
         value: ''
       };
       this.update=this.update.bind(this.state.book);
       this.handleSubmit= this.handleSubmit.bind(this);
   

   update(e) {
    this.setState({value: e.target.value});
   }

        return (
          <div className="book">
            <div className="book-top">
              <span>{this.props.book.description}</span>
              <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
              <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.update}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="didNotFinish">Did Not Finish</option>
                  <option value="none">None</option>
                </select>
              </div>
              </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
            <div className="average-rating">{this.props.book.averageRating}</div>
          </div>
        ) } }
        
export default Book;
