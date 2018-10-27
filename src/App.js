import MainPage from './components/pages/MainPage.js'
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SearchPage from './components/pages/SearchPage.js'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
 // does the props in the this.state books: have to be this.state?

  render() {

    return(
      <div>
      <MainPage />
        <Route exact path="/" component= {MainPage}/>
        <Route exact path="/search" component= {SearchPage}/>
      </div>
      );
 }
}
export default BooksApp
