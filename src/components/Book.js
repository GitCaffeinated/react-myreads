import React from 'react'

class Book extends React.Component {
   state = {
   style: '',
   backgroundImage: ''
}

  render() {

        return (
          <div className="book">
            <img className="book-cover">{this.props.backgroundImage}</img>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="didNotFinish">Did Not Finish</option>
                  <option value="none">None</option>
                </select>
              </div>
            <div className="book-title">Ender's Game</div>
            <div className="book-authors">Orson Scott Card</div>
          </div>

        ) } }
        
export default Book;